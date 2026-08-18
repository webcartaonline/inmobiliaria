import { FieldLabel } from "../atoms/FieldLabel";
import { PriceInput } from "../atoms/PriceInput";

export function PriceFilter({ value, onChange }) {
  return (
    <div className="searchField">
      <FieldLabel htmlFor="maximumPrice">
        Precio máximo
      </FieldLabel>

      <PriceInput
        id="maximumPrice"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}