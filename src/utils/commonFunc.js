const { locations, providers, productionTypes } = require("./constants");

const normalize = (str = "") => {
    return str
        .toLowerCase()
        .replace(/dr[.\s]*/g, "")
        .replace(/[^a-z0-9 ]/g, "")
        .replace(/\s+/g, " ")
        .trim();
}

const getLocationIdByName = (input) => {
    if (!input) return null;

    const cleanInput = normalize(input);

    let bestMatch = null;
    let highestScore = 0;

    for (const loc of locations) {
        const name = normalize(loc.name);
        const city = normalize(loc.address.city);
        const short = normalize(loc.shortName);

        // scoring system (higher is better)
        let score = 0;

        if (name.includes(cleanInput)) score += 5;
        if (city.includes(cleanInput)) score += 5;
        if (short === cleanInput) score += 10;

        // partial matching
        if (cleanInput.includes(city)) score += 3;
        if (cleanInput.includes(short)) score += 3;
        if (cleanInput.includes(name)) score += 2;

        // word overlap
        const inputWords = cleanInput.split(" ");
        inputWords.forEach(w => {
            if (name.includes(w)) score += 1;
            if (city.includes(w)) score += 1;
        });

        if (score > highestScore) {
            highestScore = score;
            bestMatch = loc;
        }
    }

    return bestMatch ? bestMatch.id : null;
}


const getProviderIdByName = (input, locationId = null) => {
    if (!input) return null;

    const cleanInput = normalize(input);
    let bestMatch = null;
    let highestScore = 0;

    for (const p of providers) {
        if (!p.isActive) continue;

        // Optional check: provider allowed at location
        if (locationId && !p.allowedLocations.includes(Number(locationId))) continue;

        const name = normalize(p.providerFullName);
        const short = normalize(p.shortName);

        let score = 0;

        if (name.includes(cleanInput)) score += 5;
        if (short === cleanInput) score += 10;
        if (cleanInput.includes(name)) score += 3;
        if (cleanInput.includes(short)) score += 3;

        cleanInput.split(" ").forEach(w => {
            if (name.includes(w)) score += 1;
        });

        if (score > highestScore) {
            highestScore = score;
            bestMatch = p;
        }
    }

    return bestMatch ? bestMatch.id : null;
}
const getProductionTypeIdByName = (input) => {
    if (!input) return null;

    const cleanInput = normalize(input);
    let bestMatch = null;
    let highestScore = 0;

    for (const p of productionTypes) {
        if (!p.isActive) continue;

        const name = normalize(p.name);
        let score = 0;

        if (name.includes(cleanInput)) score += 6;
        if (cleanInput.includes(name)) score += 3;

        cleanInput.split(" ").forEach(word => {
            if (name.includes(word)) score += 1;
        });

        if (score > highestScore) {
            highestScore = score;
            bestMatch = p;
        }
    }

    return bestMatch ? bestMatch.id : null;
}

const formatDateToMMDDYYYY = (input) => {
    if (!input) return null;

    const parsed = new Date(input);

    // Invalid date check
    if (isNaN(parsed.getTime())) return null;

    const mm = String(parsed.getMonth() + 1).padStart(2, '0');
    const dd = String(parsed.getDate()).padStart(2, '0');
    const yyyy = parsed.getFullYear();

    return `${mm}/${dd}/${yyyy}`;
}
module.exports = {
    normalize, getLocationIdByName, getProductionTypeIdByName, getProviderIdByName, formatDateToMMDDYYYY
}