import { FieldLabel } from "../atoms/FieldLabel";
import { Select } from "../atoms/Select";

export function NeighborhoodFilter({ value, options, onChange }) {
  return (
    <div className="searchField">
      <FieldLabel htmlFor="neighborhood">
        Distrito
      </FieldLabel>

      <Select
        id="neighborhood"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="all">Todos los distritos</option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label} ({option.count})
          </option>
        ))}
      </Select>
    </div>
  );
}
