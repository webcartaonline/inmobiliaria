// Great-circle distance (haversine) between two { lat, lng } points, in km.
const EARTH_RADIUS_KM = 6371;

const toRadians = (degrees) => (degrees * Math.PI) / 180;

export function haversineKm(from, to) {
    const deltaLat = toRadians(to.lat - from.lat);
    const deltaLng = toRadians(to.lng - from.lng);

    const a =
        Math.sin(deltaLat / 2) ** 2 +
        Math.cos(toRadians(from.lat)) *
            Math.cos(toRadians(to.lat)) *
            Math.sin(deltaLng / 2) ** 2;

    return EARTH_RADIUS_KM * 2 * Math.asin(Math.sqrt(a));
}
