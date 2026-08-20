import dataFlats from './dataFlats.json';
import { universityCenterGroups } from './universityCenters';

const CAMPUS_NAME_BY_GROUP_ID = {
    cityCenterCampus: 'Campus Centro (Hospital Real)',
    cartujaCampus: 'Campus de Cartuja',
    fuentenuevaCampus: 'Campus de Fuentenueva',
    aynadamarCampus: 'Campus de Aynadamar (ETSIIT)',
    ptsCampus: 'Campus de la Salud (PTS)',
};

const coordinatesByCampusName = Object.fromEntries(
    dataFlats.ugrCampuses.map((campus) => [
        campus.name,
        { lat: campus.lat, lng: campus.lng },
    ]),
);

export const campusCoordinatesByGroupId = Object.fromEntries(
    Object.entries(CAMPUS_NAME_BY_GROUP_ID).map(([groupId, campusName]) => [
        groupId,
        coordinatesByCampusName[campusName],
    ]),
);

export const campusCoordinatesByCenterId = Object.fromEntries(
    universityCenterGroups.flatMap((group) =>
        group.centers.map((center) => [
            center.id,
            campusCoordinatesByGroupId[group.campusId],
        ]),
    ),
);
