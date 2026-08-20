import { UniversityCenterFilter } from "../molecules/UniversityCenterFilter";
import { DistanceFilter } from "../molecules/DistanceFilter";
import { NeighborhoodFilter } from "../molecules/NeighborhoodFilter";
import { PriceFilter } from "../molecules/PriceFilter";
import { SortFilter } from "../molecules/SortFilter";
import "./PropertySearchBar.css";

export function PropertySearchBar({
  filters,
  districtOptions,
  maximumDistanceKm,
  isDistanceEnabled,
  sortBy,
  sortOptions,
  onUniversityCenterChange,
  onDistanceChange,
  onNeighborhoodChange,
  onPriceChange,
  onSortChange,
}) {
  return (
    <div className="propertySearchBackdrop">
      <div
        className="propertySearch"
        role="search"
        aria-label="Filtros de búsqueda de viviendas"
      >
        <UniversityCenterFilter
          value={filters.universityCenterId}
          onChange={onUniversityCenterChange}
        />

        <DistanceFilter
          value={filters.maximumDistanceKm ?? 0}
          maximumKm={maximumDistanceKm}
          disabled={!isDistanceEnabled}
          onChange={onDistanceChange}
        />

        <NeighborhoodFilter
          value={filters.neighborhood}
          options={districtOptions}
          onChange={onNeighborhoodChange}
        />

        <PriceFilter
          value={filters.maximumPrice}
          onChange={onPriceChange}
        />

        <SortFilter
          value={sortBy}
          options={sortOptions}
          onChange={onSortChange}
        />
      </div>
    </div>
  );
}
