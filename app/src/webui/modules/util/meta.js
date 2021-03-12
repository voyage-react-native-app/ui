export const typesOfPlaces = {
    'architecture': 'Architecture',
    'cultural': 'Cultural',
    'historic': 'Historical',
    'industrial_facilities': 'Industrial facilities',
    'natural': 'Natural',
    'religion': 'Religion'
};

export const mapSelectedPlaceTypesToKeys = selectedPlaceTypes => {
    const selectedPlaceTypesKeys = [];

    selectedPlaceTypes.forEach(selectedPlaceType => {
        const key = Object.keys(typesOfPlaces).find(key => typesOfPlaces[key] === selectedPlaceType);
        selectedPlaceTypesKeys.push(key);
    });

    return selectedPlaceTypesKeys;
}

export const mapTypesOfPlacesToIconNames = placeName => {
    const meta = {
        'Architecture': 'faArchway',
        'Cultural': 'faTheaterMasks',
        'Historical': 'faMonument',
        'Industrial facilities': 'faIndustry',
        'Natural': 'faTree',
        'Religion': 'faPrayingHands'
    };

    return meta[placeName];
};
