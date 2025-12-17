const { carestackGet } = require('../services/carestackClient');

const patientResourcePath = process.env.CS_PATIENT_RESOURCE_PATH || '/api/v1.0/patients';

async function getPatientById(req, res) {
    const { patientId } = req.params;

    if (!patientId) {
        return res.status(400).json({
            error: 'Missing required parameter: patientId',
        });
    }

    try {
        const upstream = await carestackGet(`${patientResourcePath}/${encodeURIComponent(patientId)}`);
        const body = await upstream.text();
        const contentType = upstream.headers.get('content-type') || 'application/json; charset=utf-8';

        res.status(upstream.status);
        res.setHeader('content-type', contentType);
        res.send(body);
    } catch (err) {
        console.error('Failed to fetch patient data', err);
        res.status(500).json({
            error: 'Failed to fetch patient data',
            detail: String(err),
        });
    }
}

module.exports = {
    getPatientById,
};
