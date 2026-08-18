import dataFlats from './dataFlats.json';
import images from '../utils/images';

const getFlatImage = (imagePath) => {
    if (!imagePath) return '';
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
        return imagePath;
    }
    const filename = imagePath.split('/').pop();
    return images[filename] || imagePath;
};

const flats = dataFlats.flats.map((flat) => ({
    id: flat.id,
    image: getFlatImage(flat.image),
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

