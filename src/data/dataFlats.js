import dataFlats from './dataFlats.json';

const flats = dataFlats.pisos.map((piso) => ({
    id: piso.id,
    image: piso.imagen,
    price: `${piso.precio_mes_eur}€/MES`,
    title: `Piso en ${piso.zona}`,
    distance: `a ${piso.distancia_campus_km} km de ${piso.campus_mas_cercano}`,
    services: [
        `${piso.habitaciones_piso} habitaciones`,
        piso.companeros,
        piso.se_permite_fumar ? 'Se permite fumar' : 'No fumadores',
    ],
}));

export default flats;
