let fetchFn = global.fetch;

if (!fetchFn) {
  fetchFn = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
}

const tokenCache = {
  access_token: null,
  expires_at: 0,
};

const getCarestackBaseUrl = () => process.env.CS_BASE_URL || 'https://dentaltech.carestack.ie';

const isTokenValid = () => {
  const now = Date.now();
  return tokenCache.access_token && now < tokenCache.expires_at - 60_000;
};

async function getAccessToken() {
  if (isTokenValid()) {
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

function getTokenMetadata() {
  return { ...tokenCache };
}

function buildCarestackUrl(path = '') {
  if (!path) return getCarestackBaseUrl();
  if (/^https?:\/\//i.test(path)) return path;
  return `${getCarestackBaseUrl()}${path.startsWith('/') ? '' : '/'}${path}`;
}

async function carestackGet(path, { headers = {}, token } = {}) {
  const authToken = token || await getAccessToken();

  return fetchFn(buildCarestackUrl(path), {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`,
      Accept: 'application/json',
      ...headers,
    },
  });
}

function rawFetch(url, options) {
  return fetchFn(url, options);
}

module.exports = {
  getAccessToken,
  getTokenMetadata,
  carestackGet,
  buildCarestackUrl,
  rawFetch,
};
