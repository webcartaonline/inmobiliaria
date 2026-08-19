import dataFlats from './dataFlats.json';
import { universityCenterGroups } from './universityCenters';

// Maps each search campus group to its matching campus name inside dataFlats.json,
// so we can reuse the coordinates already stored there.
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

// Coordinates of every selectable campus, keyed by its group id.
export const campusCoordinatesByGroupId = Object.fromEntries(
    Object.entries(CAMPUS_NAME_BY_GROUP_ID).map(([groupId, campusName]) => [
        groupId,
        coordinatesByCampusName[campusName],
    ]),
);

// Resolves a selected faculty/school id to the coordinates of its campus.
export const campusCoordinatesByCenterId = Object.fromEntries(
    universityCenterGroups.flatMap((group) =>
        group.centers.map((center) => [
            center.id,
            campusCoordinatesByGroupId[group.campusId],
        ]),
    ),
);
