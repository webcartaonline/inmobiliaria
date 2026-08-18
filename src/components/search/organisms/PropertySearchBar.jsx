import { useState } from "react";
import { UniversityCenterFilter } from "../molecules/UniversityCenterFilter";
import { WalkingTimeFilter } from "../molecules/WalkingTimeFilter";
import { NeighborhoodFilter } from "../molecules/NeighborhoodFilter";
import { PriceFilter } from "../molecules/PriceFilter";
import { SearchButton } from "../atoms/SearchButton";
import "./PropertySearchBar.css";

const initialFilters = {
  universityCenterId: "",
  maximumWalkingMinutes: 15,
  neighborhood: "all",
  maximumPrice: 500,
};

export function PropertySearchBar({ onSearch }) {
  const [filters, setFilters] = useState(initialFilters);

  function updateFilter(filterName, filterValue) {
    setFilters((currentFilters) => ({
      ...currentFilters,
      [filterName]: filterValue,
    }));
  }

  function handlePriceChange(event) {
    const inputValue = event.target.value;

    updateFilter(
      "maximumPrice",
      inputValue === "" ? "" : Number(inputValue),
    );
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Submitted property filters:", filters);

    if (onSearch) {
      onSearch(filters);
    }
  }

  return (
    <div className="propertySearchBackdrop">
      <form
        className="propertySearch"
        aria-label="Filtros de búsqueda de viviendas"
        onSubmit={handleSubmit}
      >
        <UniversityCenterFilter
          value={filters.universityCenterId}
          onChange={(event) =>
            updateFilter(
              "universityCenterId",
              event.target.value,
            )
          }
        />

        <WalkingTimeFilter
          value={filters.maximumWalkingMinutes}
          disabled={!filters.universityCenterId}
          onChange={(event) =>
            updateFilter(
              "maximumWalkingMinutes",
              Number(event.target.value),
            )
          }
        />

        <NeighborhoodFilter
          value={filters.neighborhood}
          onChange={(event) =>
            updateFilter(
              "neighborhood",
              event.target.value,
            )
          }
        />

        <PriceFilter
          value={filters.maximumPrice}
          onChange={handlePriceChange}
        />

        <SearchButton />
      </form>
    </div>
  );
}
