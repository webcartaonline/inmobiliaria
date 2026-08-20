import CardFlat from "../components/cardflat/CardFlat";
import { PropertySearchBar } from "../components/search/organisms/PropertySearchBar";
import { useFlatFilters } from "../hooks/useFlatFilters";
import "../styles/flats.css";

function Flats() {
    const {
        filters,
        sortBy,
        sortOptions,
        filteredFlats,
        districtOptions,
        maximumSelectableDistanceKm,
        isDistanceEnabled,
        selectUniversityCenter,
        setMaximumDistance,
        setNeighborhood,
        setMaximumPrice,
        setSortBy,
    } = useFlatFilters();

    const flatsCount = filteredFlats.length;

    return (
        <section className="flatsPage">
            <div className="flatsHero">
                <p className="flatsHeroEyebrow">PISOS COMPARTIDOS PARA ESTUDIANTES</p>
                <h1 className="flatsHeroTitle">ENCUENTRA TU PISO EN GRANADA</h1>
                <p className="flatsHeroSubtitle">
                    Encuentra tu habitación ideal cerca de tu universidad y vive Granada a tu manera.
                </p>

                <div className="flatsHeroCount">
                    {flatsCount} {flatsCount === 1 ? "PISO DISPONIBLE" : "PISOS DISPONIBLES"}
                </div>
            </div>

            <PropertySearchBar
                filters={filters}
                districtOptions={districtOptions}
                maximumDistanceKm={maximumSelectableDistanceKm}
                isDistanceEnabled={isDistanceEnabled}
                sortBy={sortBy}
                sortOptions={sortOptions}
                onUniversityCenterChange={selectUniversityCenter}
                onDistanceChange={setMaximumDistance}
                onNeighborhoodChange={setNeighborhood}
                onPriceChange={setMaximumPrice}
                onSortChange={setSortBy}
            />

            <h2 className="flatsPageTitle">ESTOS PISOS TE PUEDEN INTERESAR</h2>

            <div className="flatsPageGrid">
                {flatsCount === 0 ? (
                    <p className="flatsPageEmpty">
                        No hay pisos que coincidan con los filtros seleccionados.
                    </p>
                ) : (
                    filteredFlats.map((flat) => (
                        <CardFlat
                            key={flat.id}
                            image={flat.image}
                            price={flat.price}
                            title={flat.title}
                            distance={flat.distance}
                            services={flat.services}
                        />
                    ))
                )}
            </div>
        </section>
    );
}

export default Flats;
