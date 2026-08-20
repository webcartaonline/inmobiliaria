import { useEffect, useMemo, useState } from 'react';
import flats from '../data/dataFlats';
import { campusCoordinatesByCenterId } from '../data/ugrCampuses';
import { haversineKm } from '../utils/geo';

const ALL_DISTRICTS = 'all';

// Available "Ordenar por" criteria. The distance option is only offered once a
// campus is selected, since distance is measured against it.
export const SORT_BY = {
    DEFAULT: 'default',
    PRICE_ASC: 'priceAsc',
    PRICE_DESC: 'priceDesc',
    DISTANCE_ASC: 'distanceAsc',
};

const baseSortOptions = [
    { value: SORT_BY.DEFAULT, label: 'Relevancia' },
    { value: SORT_BY.PRICE_ASC, label: 'Precio: más bajo' },
    { value: SORT_BY.PRICE_DESC, label: 'Precio: más alto' },
];

const noFilters = {
    universityCenterId: '',
    maximumDistanceKm: null,
    neighborhood: ALL_DISTRICTS,
    maximumPrice: '',
};

// Highest straight-line distance (rounded up, in km) from any flat to a campus.
function maxDistanceToCampus(campusCoordinates) {
    const distances = flats.map((flat) =>
        haversineKm(flat.coordinates, campusCoordinates),
    );

    return Math.ceil(Math.max(...distances));
}

// A flat is kept only when it satisfies every active filter except the one asked
// to ignore, which lets each facet count the flats the other filters allow.
function matchesFilters(flat, filters, { ignore } = {}) {
    const withinDistance =
        ignore === 'distance' ||
        filters.maximumDistanceKm === null ||
        flat.distanceToCenterKm === null ||
        flat.distanceToCenterKm <= filters.maximumDistanceKm;

    const withinNeighborhood =
        ignore === 'neighborhood' ||
        filters.neighborhood === ALL_DISTRICTS ||
        flat.neighborhood === filters.neighborhood;

    const withinPrice =
        ignore === 'price' ||
        filters.maximumPrice === '' ||
        flat.priceMonthEur <= filters.maximumPrice;

    return withinDistance && withinNeighborhood && withinPrice;
}

export function useFlatFilters() {
    const [filters, setFilters] = useState(noFilters);
    const [sortBy, setSortBy] = useState(SORT_BY.DEFAULT);

    const selectedCampusCoordinates =
        campusCoordinatesByCenterId[filters.universityCenterId] ?? null;

    // Attach the distance to the selected campus (null while none is chosen).
    const flatsWithDistance = useMemo(
        () =>
            flats.map((flat) => ({
                ...flat,
                distanceToCenterKm: selectedCampusCoordinates
                    ? haversineKm(flat.coordinates, selectedCampusCoordinates)
                    : null,
            })),
        [selectedCampusCoordinates],
    );

    const maximumSelectableDistanceKm = selectedCampusCoordinates
        ? maxDistanceToCampus(selectedCampusCoordinates)
        : 0;

    // Flats that pass every active filter, before ordering.
    const filteredFlats = useMemo(
        () => flatsWithDistance.filter((flat) => matchesFilters(flat, filters)),
        [flatsWithDistance, filters],
    );

    // The same flats, ordered by the chosen "Ordenar por" criterion.
    const sortedFlats = useMemo(() => {
        const flatsToSort = [...filteredFlats];

        switch (sortBy) {
            case SORT_BY.PRICE_ASC:
                return flatsToSort.sort(
                    (a, b) => a.priceMonthEur - b.priceMonthEur,
                );
            case SORT_BY.PRICE_DESC:
                return flatsToSort.sort(
                    (a, b) => b.priceMonthEur - a.priceMonthEur,
                );
            case SORT_BY.DISTANCE_ASC:
                return flatsToSort.sort(
                    (a, b) =>
                        (a.distanceToCenterKm ?? Infinity) -
                        (b.distanceToCenterKm ?? Infinity),
                );
            default:
                return flatsToSort;
        }
    }, [filteredFlats, sortBy]);

    // Offer the distance ordering only when a campus is selected.
    const sortOptions = selectedCampusCoordinates
        ? [
              ...baseSortOptions,
              { value: SORT_BY.DISTANCE_ASC, label: 'Distancia: más cerca' },
          ]
        : baseSortOptions;

    // District options reflect the flats allowed by the other filters, each with
    // its own count, so choosing one filter never leaves stale districts behind.
    const districtOptions = useMemo(() => {
        const countByDistrict = new Map();

        flatsWithDistance
            .filter((flat) =>
                matchesFilters(flat, filters, { ignore: 'neighborhood' }),
            )
            .forEach((flat) => {
                countByDistrict.set(
                    flat.neighborhood,
                    (countByDistrict.get(flat.neighborhood) ?? 0) + 1,
                );
            });

        return [...countByDistrict.entries()]
            .map(([neighborhood, count]) => ({
                value: neighborhood,
                label: neighborhood,
                count,
            }))
            .sort((a, b) => a.label.localeCompare(b.label, 'es'));
    }, [flatsWithDistance, filters]);

    // Keep the selection coherent: if a district stops matching the other
    // filters, fall back to "all" instead of showing an empty result.
    useEffect(() => {
        if (filters.neighborhood === ALL_DISTRICTS) return;

        const stillAvailable = districtOptions.some(
            (option) => option.value === filters.neighborhood,
        );

        if (!stillAvailable) {
            setFilters((current) => ({
                ...current,
                neighborhood: ALL_DISTRICTS,
            }));
        }
    }, [districtOptions, filters.neighborhood]);

    // If distance ordering was active and the campus is cleared, fall back to
    // the default order so the dropdown never shows an option it no longer has.
    useEffect(() => {
        if (!selectedCampusCoordinates && sortBy === SORT_BY.DISTANCE_ASC) {
            setSortBy(SORT_BY.DEFAULT);
        }
    }, [selectedCampusCoordinates, sortBy]);

    function selectUniversityCenter(centerId) {
        const campusCoordinates = campusCoordinatesByCenterId[centerId] ?? null;

        setFilters((current) => ({
            ...current,
            universityCenterId: centerId,
            // The distance filter only makes sense against a campus, so it is
            // reset to "no limit" (its max) when one is chosen, off otherwise.
            maximumDistanceKm: campusCoordinates
                ? maxDistanceToCampus(campusCoordinates)
                : null,
        }));
    }

    function setMaximumDistance(distanceKm) {
        setFilters((current) => ({
            ...current,
            maximumDistanceKm: distanceKm,
        }));
    }

    function setNeighborhood(neighborhood) {
        setFilters((current) => ({ ...current, neighborhood }));
    }

    function setMaximumPrice(price) {
        setFilters((current) => ({
            ...current,
            maximumPrice: price === '' ? '' : Number(price),
        }));
    }

    return {
        filters,
        sortBy,
        sortOptions,
        filteredFlats: sortedFlats,
        districtOptions,
        maximumSelectableDistanceKm,
        isDistanceEnabled: Boolean(selectedCampusCoordinates),
        selectUniversityCenter,
        setMaximumDistance,
        setNeighborhood,
        setMaximumPrice,
        setSortBy,
    };
}
