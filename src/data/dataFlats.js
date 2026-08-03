import dataFlats from './dataFlats.json';

const flats = dataFlats.flats.map((flat) => ({
    id: flat.id,
    image: flat.image,
    price: `${flat.priceMonthEur}€/MES`,
    title: `Piso en ${flat.neighborhood}`,
    distance: `a ${flat.distanceCampusKm} km de ${flat.nearestCampus}`,
    services: [
        `${flat.roomsInFlat} hab`,
        flat.roommates,
        flat.smokingAllowed ? 'Fumar SI' : 'fumar NO',
    ],
}));

export default flats;
