// Simple local proxy server for CareStack API to avoid CORS in the browser
// Usage:
//   CARESTACK_API_KEY=... node server.js
// Or on Windows (PowerShell):
//   $env:CARESTACK_API_KEY="..."; node server.js

const express = require('express');
const cors = require('cors');
const { getLocationIdByName, getProviderIdByName, getProductionTypeIdByName, formatDateToMMDDYYYY } = require('./src/utils/commonFunc');
const patientRoutes = require('./src/routes/patientRoutes');
// Load environment variables from .env if present
try { require('dotenv').config(); } catch (_) { }

// Use global fetch if available (Node 18+), otherwise fall back to node-fetch
let fetchFn = global.fetch;
if (!fetchFn) {
  fetchFn = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
}

const app = express();
const PORT = process.env.PORT || 3000;

// Allow CORS from local dev by default
app.use(cors({ origin: true }));

app.get('/health', (req, res) => {
  res.json({ ok: true, time: new Date().toISOString() });
});

app.use('/api/patients', patientRoutes);

// In-memory token cache
let tokenCache = {
  access_token: null,
  expires_at: 0, // epoch ms
};

async function getAccessToken() {
  const now = Date.now();
  if (tokenCache.access_token && now < tokenCache.expires_at - 60_000) {
    return tokenCache.access_token;
  }

  const tokenUrl = process.env.CS_TOKEN_URL || 'https://id.carestack.ie/connect/token';
  const client_id = process.env.CS_CLIENT_ID || 'dentaltech_api_client';
  const client_secret = process.env.CS_CLIENT_SECRET || '7c6d0e00-ffb3-4958-8595-096559ffaa5d';
  const username = process.env.CS_USERNAME || 'A9428E02-0A69-4B0C-8232-062A8EB19EBF';
  const password = process.env.CS_PASSWORD || '0CAEAC10-D1B7-4D49-9259-B5262537FD24';

  if (!client_id || !client_secret || !username || !password) {
    throw new Error('Missing token credentials. Please set CS_CLIENT_ID, CS_CLIENT_SECRET, CS_USERNAME, CS_PASSWORD');
  }

  const body = new URLSearchParams();
  body.set('grant_type', 'password');
  body.set('client_id', client_id);
  body.set('client_secret', client_secret);
  body.set('username', username);
  body.set('password', password);

  const resp = await fetchFn(tokenUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: body.toString(),
  });
  console.log("🚀 ~ getAccessToken ~ resp:", resp)

  if (!resp.ok) {
    const text = await resp.text().catch(() => '');
    throw new Error(`Token request failed: ${resp.status} ${resp.statusText} ${text}`);
  }
  const json = await resp.json();
  const expires_in = Number(json.expires_in || 300); // seconds
  tokenCache.access_token = json.access_token;
  tokenCache.expires_at = Date.now() + expires_in * 1000;
  return tokenCache.access_token;
}

// Test endpoint to fetch a token
app.get('/api/token', async (req, res) => {
  try {
    const token = await getAccessToken();
    res.json({ access_token: token, expires_at: tokenCache.expires_at });
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
});

// Proxy endpoint
app.get('/api/find-slot', async (req, res) => {
  try {
    const token = await getAccessToken();
    console.log("🚀 ~ token:", token)

    const { fromDate, toDate, locationId, providerId, productionTypeId } = req.query;

    if (!toDate, !fromDate || !locationId || !providerId || !productionTypeId) {
      return res.status(400).json({ error: 'Missing required query params: fromDate, toDate, locationId, providerId, productionTypeId' });
    }

    const base = 'https://dentaltech.carestack.ie';
    const url = `${base}/scheduler/api/v1.0/appointments/find-slot?fromDate=${encodeURIComponent(fromDate)}&toDate=${encodeURIComponent(toDate)}&locationId=${encodeURIComponent(locationId)}&providerId=${encodeURIComponent(providerId)}&productionTypeId=${encodeURIComponent(productionTypeId)}`;

    const upstream = await fetchFn(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json'
      },
    });

    const text = await upstream.text();
    res.status(upstream.status);
    // Forward content-type if provided, else default to json
    const ct = upstream.headers.get('content-type') || 'application/json; charset=utf-8';
    res.setHeader('content-type', ct);
    res.send(text);
  } catch (err) {
    console.error('Proxy error', err);
    res.status(500).json({ error: 'Proxy failure', detail: String(err) });
  }
});
// Proxy endpoint
app.post('/api/webhook/find-slot', async (req, res) => {
  try {
    const token = await getAccessToken();
    console.log("🚀 Token fetched");

    const {
      fromDate,
      locationId,
      providerId,
      productionTypeId
    } = req.query;

    console.log("Incoming Webhook Query:", req.query);

    if (!fromDate || !locationId || !providerId || !productionTypeId) {
      return res.status(400).json({
        error: "Missing required parameters",
        required: ["fromDate", "locationId", "providerId", "productionTypeId"],
        received: req.query
      });
    }

    // Decode + format date
    const rawDate = decodeURIComponent(decodeURIComponent(fromDate));
    const formattedDate = formatDateToMMDDYYYY(rawDate);

    if (!formattedDate) {
      return res.status(400).json({
        error: "Invalid date format",
        received: rawDate,
        expected: "MM/DD/YYYY or ISO format (YYYY-MM-DD)"
      });
    }

    const decodedLocation = decodeURIComponent(locationId);
    const decodedProvider = decodeURIComponent(providerId);
    const decodedProduction = decodeURIComponent(decodeURIComponent(productionTypeId));

    // Convert names → Real IDs
    const realLocationId = getLocationIdByName(decodedLocation);
    const realProviderId = getProviderIdByName(decodedProvider, realLocationId);
    const realProductionTypeId = getProductionTypeIdByName(decodedProduction);

    if (!realLocationId || !realProviderId || !realProductionTypeId) {
      return res.status(400).json({
        error: "Invalid parameters after mapping",
        data: { realLocationId, realProviderId, realProductionTypeId }
      });
    }

    // Build CareStack API URL
    const base = 'https://dentaltech.carestack.ie';
    const url = `${base}/scheduler/api/v1.0/appointments/find-slot` +
      `?fromDate=${encodeURIComponent(formattedDate)}` +
      `&locationId=${realLocationId}` +
      `&providerId=${realProviderId}` +
      `&productionTypeId=${realProductionTypeId}`;

    console.log("Calling CareStack API:", url);

    const upstream = await fetchFn(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json"
      }
    });

    const rawText = await upstream.text();
    console.log("🚀 Raw CareStack Response:", rawText);

    // Parse upstream CareStack array
    const csData = JSON.parse(rawText);

    // CARESTACK RETURNS: [{ providerId, slots: [ ... ] }]
    const providerGroup = csData[0];

    // Transform into GHL Voice AI compatible format
    const transformed = {
      slots: providerGroup.slots.map(s => ({
        start: s.startDateTime,
        end: s.endDateTime
      }))
    };

    console.log("🚀 Transformed Slots for GHL:", transformed);

    res.status(200).json(transformed);

  } catch (err) {
    console.error("🚨 Webhook Error:", err);

    return res.status(500).json({
      error: "Webhook processing failed",
      detail: String(err)
    });
  }
});

// Get Production Types
app.get('/api/production-types', async (req, res) => {
  try {
    const token = await getAccessToken();
    console.log("🚀 ~ token:", token)

    const base = 'https://dentaltech.carestack.ie';
    const url = `${base}/api/v1.0/production-types`;

    const upstream = await fetchFn(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json'
      },
    });

    const text = await upstream.text();
    res.status(upstream.status);
    // Forward content-type if provided, else default to json
    const ct = upstream.headers.get('content-type') || 'application/json; charset=utf-8';
    res.setHeader('content-type', ct);
    res.send(text);
  } catch (err) {
    console.error('Proxy error', err);
    res.status(500).json({ error: 'Proxy failure', detail: String(err) });
  }
});

app.listen(PORT, () => {
  console.log(`Local proxy running on http://localhost:${PORT}`);
});
