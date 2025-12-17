exports.locations = [
    {
        "id": 1,
        "shortName": "DTECH",
        "name": "DentalTech Group",
        "email": "care@carestack.net",
        "timeZone": "Eastern Standard Time",
        "phone1": "(123) 456-7890",
        "phone2": "",
        "fax": "",
        "website": "",
        "logoUrl": "",
        "address": {
            "addressLine1": "Please Fill AddressLine1",
            "addressLine2": "",
            "city": "Kissimmee",
            "state": "FL",
            "zipCode": "BT1516",
            "customValidator": null,
            "rowVersionStamp": null
        },
        "latitude": 28.2955867,
        "longitude": -81.403931399999991,
        "customValidator": null,
        "rowVersionStamp": null
    },
    {
        "id": 1002,
        "shortName": "SWOR",
        "name": "Dentaltech Swords",
        "email": "clinics@dentaltech.ie",
        "timeZone": "GMT Standard Time",
        "phone1": "",
        "phone2": "",
        "fax": "",
        "website": "",
        "logoUrl": "",
        "address": {
            "addressLine1": "Unit 25 The Plaza",
            "addressLine2": "Main Street",
            "city": "Dublin",
            "state": "",
            "zipCode": "K67 H598",
            "customValidator": null,
            "rowVersionStamp": null
        },
        "latitude": 53.4566095,
        "longitude": -6.2206641,
        "customValidator": null,
        "rowVersionStamp": null
    },
    {
        "id": 1003,
        "shortName": "WEXF",
        "name": "Dentaltech Wexford",
        "email": "clinics@dentaltech.ie",
        "timeZone": "Greenwich Standard Time",
        "phone1": "",
        "phone2": "",
        "fax": "",
        "website": "",
        "logoUrl": "",
        "address": {
            "addressLine1": "20 Selskar St",
            "addressLine2": "",
            "city": "Wexford",
            "state": "",
            "zipCode": "Y35 X592",
            "customValidator": null,
            "rowVersionStamp": null
        },
        "latitude": 52.341594699999987,
        "longitude": -6.464449,
        "customValidator": null,
        "rowVersionStamp": null
    },
    {
        "id": 1004,
        "shortName": "TERE",
        "name": "Dentaltech - Terenure",
        "email": "clinics@dentaltech.ie",
        "timeZone": "Greenwich Standard Time",
        "phone1": "",
        "phone2": "",
        "fax": "",
        "website": "",
        "logoUrl": "",
        "address": {
            "addressLine1": "Whitehall House, Whitehall",
            "addressLine2": "",
            "city": "Terenure",
            "state": "",
            "zipCode": "D6W AD93",
            "customValidator": null,
            "rowVersionStamp": null
        },
        "latitude": 53.310415799999987,
        "longitude": -6.2898931,
        "customValidator": null,
        "rowVersionStamp": null
    },
    {
        "id": 1005,
        "shortName": "WATE",
        "name": "Dentaltech Waterford",
        "email": "clinics@dentaltech.ie",
        "timeZone": "Greenwich Standard Time",
        "phone1": "",
        "phone2": "",
        "fax": "",
        "website": "",
        "logoUrl": "",
        "address": {
            "addressLine1": "50 Michael St",
            "addressLine2": "",
            "city": "Waterford",
            "state": "",
            "zipCode": "X91 YP21",
            "customValidator": null,
            "rowVersionStamp": null
        },
        "latitude": 52.2598229,
        "longitude": -7.1115857000000009,
        "customValidator": null,
        "rowVersionStamp": null
    }
]
exports.providers = [
    {
        id: 1019,
        shortName: "RESHMA",
        providerFullName: "Reshma Dev",
        isActive: true,
        allowedLocations: [1004, 1003],
    },
    {
        id: 1087,
        shortName: "OLGAT",
        providerFullName: "Dr. Olga Teplova",
        isActive: true,
        allowedLocations: [1004],
    },
    {
        id: 1014,
        shortName: "MARIO",
        providerFullName: "Dr. Mario Viveros",
        isActive: true,
        allowedLocations: [1004, 1002],
    },
    {
        id: 1015,
        shortName: "CSP252",
        providerFullName: "Dr. Simona Bb",
        isActive: true,
        allowedLocations: [1004],
    },
    {
        id: 1139,
        shortName: "MOID",
        providerFullName: "Dr. Moid Fotuhi",
        isActive: true,
        allowedLocations: [1004],
    },

    {
        id: 1124,
        shortName: "TINASH",
        providerFullName: "Tinashe Guvamombe",
        isActive: true,
        allowedLocations: [1003],
    },
    {
        id: 1137,
        shortName: "DAVE",
        providerFullName: "David McCarthy",
        isActive: true,
        allowedLocations: [1003, 1005],
    },
    // { id: 1109, shortName: 'GEORGINA', providerFullName: 'Dr. Georgina', isActive: true, allowedLocations: [1003, 1005] },
    {
        id: 1116,
        shortName: "RAWAA",
        providerFullName: "Dr. Rawa Abdelrahim Registration number: 16916",
        isActive: true,
        allowedLocations: [1002],
    },
    // { id: 1111, shortName: 'SAOISHE', providerFullName: 'Dr. Saoishe', isActive: true, allowedLocations: [1002] },
    {
        id: 1121,
        shortName: "TRACY",
        providerFullName: "Dr. Tracy Cafrine",
        isActive: true,
        allowedLocations: [1005],
    },
];

exports.productionTypes = [
    {
        "id": 29237,
        "name": "Lunch",
        "color": "5B5959",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29238,
        "name": "Invisalign Consultation",
        "color": "AFEDBE",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29239,
        "name": "Orthodontic Visit",
        "color": "F5F195",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29240,
        "name": "Invisalign",
        "color": "E9C77C",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29241,
        "name": "Whitening",
        "color": "A9AFEF",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29242,
        "name": "Emergency Visit",
        "color": "FF4309",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29243,
        "name": "Implant",
        "color": "8480FF",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29244,
        "name": "Crown prep",
        "color": "80FFC6",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29245,
        "name": "Filling Composite Small ",
        "color": "80CEFF",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29606,
        "name": "New Patients",
        "color": "FF9E80",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29607,
        "name": "Private Patients",
        "color": "F54008",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29608,
        "name": "Oral Exam New Patient ",
        "color": "E5FFDC",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29609,
        "name": "Examination New Patient",
        "color": "E5FFDC",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29610,
        "name": "Exam Scale & Polish",
        "color": "FF9E80",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29611,
        "name": "Examination - Family",
        "color": "FF9E80",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29612,
        "name": "Implant Consultation",
        "color": "B2B2B2",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29613,
        "name": "Review",
        "color": "AFEDBE",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29614,
        "name": "Hygiene Examination",
        "color": "80E2FF",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29615,
        "name": "Emergency - Toothache",
        "color": "F32226",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29616,
        "name": "Emergency - Pain",
        "color": "F32226",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29617,
        "name": "Emergency - Broken Tooth",
        "color": "F32226",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29618,
        "name": "Emergency - Lost Crown",
        "color": "F32226",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29619,
        "name": "Emergency - Lost Filling",
        "color": "F32226",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29620,
        "name": "Scale and Polish",
        "color": "BE58F9",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29621,
        "name": "Periodontal Treatment",
        "color": "80E2FF",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29622,
        "name": "80E2FF",
        "color": "4733FD",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29623,
        "name": "Fissure Sealant",
        "color": "4733FD",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29624,
        "name": "Root Canal Treatment",
        "color": "93A056",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29625,
        "name": "Extraction",
        "color": "A1EF4D",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29626,
        "name": "SURGICAL TREATMENT",
        "color": "AAFF80",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29627,
        "name": "Bridge Preparation",
        "color": "80FFC6",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29628,
        "name": "Bridge Fit",
        "color": "80FFC6",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29629,
        "name": "Recement Bridge",
        "color": "80FFC6",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29630,
        "name": " Crown Fit",
        "color": "80FFC6",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29631,
        "name": "Recement Crown",
        "color": "80FFC6",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29632,
        "name": "Inlay Preparation",
        "color": "80FFC6",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29633,
        "name": " Inlay Fit",
        "color": "80FFC6",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29634,
        "name": "Veneer Preparation",
        "color": "80FFC6",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29635,
        "name": "Veneer Fit",
        "color": "80FFC6",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29636,
        "name": "Denture Impression",
        "color": "FF80DC",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29637,
        "name": "Denture Bite",
        "color": "FF80DC",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29638,
        "name": "Denture Try in ",
        "color": "A2ADFF",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29639,
        "name": "Denture Re-Try in",
        "color": "686C86",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29640,
        "name": "Denture Fit ",
        "color": "4D63FF",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29641,
        "name": "Denture Ease",
        "color": "FF80DC",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29642,
        "name": "Tooth Whitening",
        "color": "0EF72B",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29643,
        "name": "Ortho Visit",
        "color": "DD8906",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29644,
        "name": "Miscellaneous",
        "color": "16E9D9",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29645,
        "name": "Denture Consultation",
        "color": "D3D7F3",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29646,
        "name": "Denture Scan ",
        "color": "7D85C0",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29649,
        "name": "Filling Composite Medium ",
        "color": "80CEFF",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29650,
        "name": "Filling Composite Large ",
        "color": "80CEFF",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29651,
        "name": "Temporary Filling Small ",
        "color": "165F80",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29652,
        "name": "Temporary Filling Medium ",
        "color": "166284",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29653,
        "name": "Composite Bonding Scan ",
        "color": "FFCDA5",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29654,
        "name": "Composite Bonding Mockup ",
        "color": "D79926",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29655,
        "name": "Composite Bonding Fit X4",
        "color": "C44E12",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29656,
        "name": "Composite Bonding Fit X5",
        "color": "C44E12",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29657,
        "name": "Composite Bonding X6",
        "color": "C44E12",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29658,
        "name": "Composite Bonding X7",
        "color": "C44E12",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29659,
        "name": "Compoosite Bonding Maintenance (1-4)",
        "color": "E7C4BA",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29660,
        "name": "Composite Bonding Maintenance +4 20min/tooth ",
        "color": "E7C4BA",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29661,
        "name": "Composite Bonding X8",
        "color": "C44E12",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29662,
        "name": "Post & Core ",
        "color": "2D7346",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29664,
        "name": "Night Guard",
        "color": "452FCB",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29665,
        "name": "Composite Bonding Consultation",
        "color": "E5B6A7",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29667,
        "name": "True Fit Veneer Consult TFV",
        "color": "DFFEFF",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29668,
        "name": "Denture Repair ",
        "color": "3892A2",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29669,
        "name": "Denture Addition ",
        "color": "76A8A8",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29670,
        "name": "Denture Reline ",
        "color": "94B2B2",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29671,
        "name": "Online Consultation",
        "color": "FF9E80",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29672,
        "name": "Dental Follow Up",
        "color": "D780FF",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29673,
        "name": "1st Call Out - Home Care",
        "color": "FFE5DD",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29674,
        "name": "Follow-up Calls - Home Care",
        "color": "F8D7CD",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29675,
        "name": "Nursing home Call Out",
        "color": "F7CDC0",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29676,
        "name": "Oral Assessment for Aligners",
        "color": "FED3C7",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29677,
        "name": "Bridge - per unit",
        "color": "80FFE8",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29678,
        "name": "Cement Crown",
        "color": "80FFBD",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29679,
        "name": "Composite Veneer Scan",
        "color": "80FFD5",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29680,
        "name": "Composite Veneers (x4)",
        "color": "80FFE8",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29681,
        "name": "Composite Veneers (x5)",
        "color": "80FFD5",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29682,
        "name": "Composite Veneers (x6)",
        "color": "80FFF2",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29683,
        "name": "Composite Veneers (x7)",
        "color": "80FFED",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29684,
        "name": "Composite Veneers Maintenance(1-4 teeth)",
        "color": "DDB3A6",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29685,
        "name": "Composite veneers Maintenance(20 per tooth after 4)",
        "color": "CBA093",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29686,
        "name": "Composite Veneers x8",
        "color": "90FCFA",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29687,
        "name": "Crown - All Ceramic (per tooth)",
        "color": "85FFF2",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29688,
        "name": "Crown - Ceramic Metal (per tooth)",
        "color": "74EFCB",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29689,
        "name": "Crown - GOLD (excl cost of gold)",
        "color": "FCDD5A",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29690,
        "name": "Edge Bonding - per tooth",
        "color": "E5AF9E",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29691,
        "name": "FIT - Veneer/Crown/Bridge",
        "color": "A9FFDC",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29692,
        "name": "Maryland Bridge",
        "color": "C0FFD7",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29693,
        "name": "Denture issue under warranty",
        "color": "3892A2",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29694,
        "name": "Mock up veneer",
        "color": "F5F4B5",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29695,
        "name": "Anti Snore Consult",
        "color": "ABB2FF",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29696,
        "name": "Anti Snore Scan",
        "color": "B5A8FE",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29697,
        "name": "Complex extraction/wisdom tooth",
        "color": "BCF97E",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29698,
        "name": "Composite Bonding Fit",
        "color": "9A3110",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29699,
        "name": "Composite Bonding Follow up",
        "color": "9C4125",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29700,
        "name": "DECARE Exam",
        "color": "F897EF",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29701,
        "name": "Deep Clean (per quadrant)",
        "color": "FF809C",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29702,
        "name": "Dental Follow Up Review",
        "color": "CD69D7",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29703,
        "name": "Emergency Oral Exam",
        "color": "E70E12",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29704,
        "name": "Exam & Consultation",
        "color": "E0FFB4",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29705,
        "name": "Exam (Surgery clearence ,and x-rays))",
        "color": "CAFF80",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29706,
        "name": "Extraction (non surgical)",
        "color": "82FE76",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29707,
        "name": "Extraction Wisdom Tooth (Surgical)",
        "color": "8BFF80",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29708,
        "name": "Extraction(Molar)",
        "color": "80FF8D",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29709,
        "name": "Filling (Large) composite With Rubber Dam",
        "color": "59C9ED",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29710,
        "name": "Filling (Large) White Composite",
        "color": "74C4E9",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29711,
        "name": "Filling (Medium) White Composite",
        "color": "6BBFED",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29712,
        "name": "Filling (Medium) White Compsite With Rubber Dam",
        "color": "6EB1ED",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29713,
        "name": "Filling (Small) White Composite",
        "color": "68CFF7",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29714,
        "name": "Filling (Small) White Composite with Rubber Dam",
        "color": "68A6DD",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29715,
        "name": "Impacted wisdom tooth",
        "color": "9E9A82",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29716,
        "name": "Late cancellation/no show fee",
        "color": "5A5A5A",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29717,
        "name": "Natural Tooth Repair",
        "color": "FFE8E0",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29718,
        "name": "Open Dental",
        "color": "F4CAFF",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29719,
        "name": "Oral Exam",
        "color": "44B164",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29722,
        "name": "Oral Exam 20 min",
        "color": "479046",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29723,
        "name": "Oral exam(Swords offer)",
        "color": "56A252",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29724,
        "name": "Oral surgery Consultation",
        "color": "FFFF49",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29725,
        "name": "Phonecall To Patient",
        "color": "8D43D9",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29726,
        "name": "PRSI Exam, Scale & Polish",
        "color": "FF9E80",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29727,
        "name": "RCT",
        "color": "A4F5A0",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29728,
        "name": "Other",
        "color": "4D16A7",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29729,
        "name": "Bite check",
        "color": "FA68C5",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29730,
        "name": "Chairside Reline",
        "color": "6EA790",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29731,
        "name": "Clasp addition fit",
        "color": "B0B3FA",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29732,
        "name": "Clasp Addition(existing patient)",
        "color": "ACA1FF",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29733,
        "name": "Clasp addition(new patient)",
        "color": "B09FFC",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29734,
        "name": "Clasp addition(with impresssion)",
        "color": "9B94F9",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29735,
        "name": "Denture Addition (3-4)",
        "color": "2AA0A2",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29736,
        "name": "Denture Addition Fit",
        "color": "3B979C",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29737,
        "name": "Postage",
        "color": "0E8A2C",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29738,
        "name": "Denture Additions (1-2)",
        "color": "3B9C8E",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29739,
        "name": "Denture Reline (existing patient)",
        "color": "449A81",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29740,
        "name": "Denture Reline (new patient)",
        "color": "44A096",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29741,
        "name": "Orthodontic (Hawley) retainer - per arch",
        "color": "FFEA56",
        "isActive": true,
        "type": 1
    },
    {
        "id": 29742,
        "name": "Orthodontic (Essix) Retainer - per arch",
        "color": "FFED92",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29743,
        "name": "Free Clear Aligner Consultation",
        "color": "FFD4C6",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29744,
        "name": "Nightguard collection",
        "color": "5A14E9",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29745,
        "name": "Free Composite Bonding Consultation",
        "color": "BF4B27",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29746,
        "name": "Hard Night Guard",
        "color": "6B16E7",
        "isActive": true,
        "type": 1
    },
    {
        "id": 29747,
        "name": "Free Denture Consultation",
        "color": "41A1A5",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29748,
        "name": "Free Implant Consultation",
        "color": "ADADAD",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29749,
        "name": "Free Truefit Veneers Consult",
        "color": "AAF4FF",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29750,
        "name": "Anti-Snoring Device",
        "color": "7748ED",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29751,
        "name": "Humm Finance Consult",
        "color": "893E98",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29752,
        "name": "Implant Consultation with Dr.Carlos €150",
        "color": "DCFF44",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29753,
        "name": "Post Denture",
        "color": "0C8216",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29754,
        "name": "Oral Assessment for Implants",
        "color": "B1B1B1",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29755,
        "name": "Add Chrome (Lower)",
        "color": "7A69FF",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29756,
        "name": "Add Chrome (Upper)",
        "color": "7C57FA",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29757,
        "name": "Denture Professional Cleaning (per arch)",
        "color": "69AC4E",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29758,
        "name": "Bite Registration",
        "color": "FF80D1",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29760,
        "name": "Chrome design and mould",
        "color": "8462FA",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29761,
        "name": "Collect Repair",
        "color": "18D9B5",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29762,
        "name": "Denture (1st appointment)",
        "color": "80FFCB",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29763,
        "name": "Denture Adjustment",
        "color": "80FFDA",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29764,
        "name": "Oral Exam for Dentures",
        "color": "16840F",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29765,
        "name": "Denture Exam",
        "color": "80FFE8",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29766,
        "name": "Denture Fit - Both Arches",
        "color": "80FFF2",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29767,
        "name": "Implant Housing",
        "color": "C8C3BE",
        "isActive": true,
        "type": 1
    },
    {
        "id": 29768,
        "name": "Denture Fit - Single Arch",
        "color": "80FFF7",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29769,
        "name": "Denture Review/scan",
        "color": "80FFF7",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29770,
        "name": "Denture Tablets ",
        "color": "FC80FF",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29771,
        "name": "Repair impression needed",
        "color": "8082FF",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29772,
        "name": "Online Appt 1",
        "color": "FF9E80",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29773,
        "name": "Online Appt 2",
        "color": "3C43BA",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29774,
        "name": "Online Appt 3",
        "color": "F18286",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29775,
        "name": "Truefit Veneer Fit ",
        "color": "1D8075",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29776,
        "name": "Reline Fit",
        "color": "FFE007",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29777,
        "name": "Splint x8",
        "color": "A100FF",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29778,
        "name": "Splint x6",
        "color": "FF9E80",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29779,
        "name": "Truefit Veneer Scan",
        "color": "FF9E80",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29780,
        "name": "x-ray",
        "color": "FF80E8",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29781,
        "name": "Collection (retainer,nightgaurd etc)",
        "color": "B0396F",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29783,
        "name": "Spare denture scan",
        "color": "FF3C00",
        "isActive": true,
        "type": 0
    },
    {
        "id": 29819,
        "name": "Truefit Veneers issues",
        "color": "000000",
        "isActive": true,
        "type": 0
    },
    {
        "id": 30059,
        "name": "Routine Dental Check up",
        "color": "9280FF",
        "isActive": true,
        "type": 0
    },
    {
        "id": 30275,
        "name": "PRSI EXAM",
        "color": "FF9E80",
        "isActive": true,
        "type": 0
    },
    {
        "id": 30276,
        "name": "PRSI SCALE & POLISH",
        "color": "FF9E80",
        "isActive": true,
        "type": 0
    },
    {
        "id": 30277,
        "name": "PRSI EXAM SCALE & POLISH",
        "color": "FF9E80",
        "isActive": true,
        "type": 0
    },
    {
        "id": 30448,
        "name": "Special Trays",
        "color": "80E1FF",
        "isActive": true,
        "type": 0
    },
    {
        "id": 30514,
        "name": "STF/-",
        "color": "FF9E80",
        "isActive": true,
        "type": 0
    },
    {
        "id": 30596,
        "name": "Implant Crown",
        "color": "8C80FF",
        "isActive": true,
        "type": 0
    },
    {
        "id": 30597,
        "name": "All On 4",
        "color": "5EE3ED",
        "isActive": true,
        "type": 0
    },
    {
        "id": 30598,
        "name": "Clear Aligner Fit",
        "color": "E430B2",
        "isActive": true,
        "type": 0
    },
    {
        "id": 30701,
        "name": "Follow up consult with TPC",
        "color": "0CB1ED",
        "isActive": true,
        "type": 0
    },
    {
        "id": 30719,
        "name": "May'25 Offer - Exam,Scan,Consult,Written Tx",
        "color": "F3FF80",
        "isActive": true,
        "type": 0
    },
    {
        "id": 30720,
        "name": "Implant exposure",
        "color": "DD8CEF",
        "isActive": true,
        "type": 0
    },
    {
        "id": 30721,
        "name": "Bonegraft",
        "color": "FFD680",
        "isActive": true,
        "type": 0
    },
    {
        "id": 30722,
        "name": "Consultation",
        "color": "FF9E80",
        "isActive": true,
        "type": 0
    },
    {
        "id": 30723,
        "name": "6 Implants Overdenture",
        "color": "FF9E80",
        "isActive": true,
        "type": 0
    },
    {
        "id": 30724,
        "name": "Kids exam",
        "color": "80F6FF",
        "isActive": true,
        "type": 0
    },
    {
        "id": 30725,
        "name": "Kids scale and polish",
        "color": "8087FF",
        "isActive": true,
        "type": 0
    },
    {
        "id": 30726,
        "name": "Abutment",
        "color": "DC72ED",
        "isActive": true,
        "type": 0
    },
    {
        "id": 30727,
        "name": "MultiUnit Abutment",
        "color": "FF9E80",
        "isActive": true,
        "type": 0
    },
    {
        "id": 30728,
        "name": "Gum Filler",
        "color": "D476DF",
        "isActive": true,
        "type": 0
    },
    {
        "id": 30729,
        "name": "All on 5",
        "color": "916EE5",
        "isActive": true,
        "type": 0
    },
    {
        "id": 30730,
        "name": "All on 6",
        "color": "8095FF",
        "isActive": true,
        "type": 0
    },
    {
        "id": 30731,
        "name": "TEMPORARY IMPLANT RETAINED DENTURE",
        "color": "88FF80",
        "isActive": true,
        "type": 0
    },
    {
        "id": 30732,
        "name": "Collect aligners",
        "color": "809FFF",
        "isActive": true,
        "type": 0
    },
    {
        "id": 30733,
        "name": "Gumshield Scan",
        "color": "FF9E80",
        "isActive": true,
        "type": 0
    }
]