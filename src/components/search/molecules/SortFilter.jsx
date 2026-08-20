import { FieldLabel } from "../atoms/FieldLabel";
import { Select } from "../atoms/Select";

export function SortFilter({ value, options, onChange }) {
  return (
    <div className="searchField">
      <FieldLabel htmlFor="sortBy">
        Ordenar por
      </FieldLabel>

      <Select
        id="sortBy"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </div>
  );
}
