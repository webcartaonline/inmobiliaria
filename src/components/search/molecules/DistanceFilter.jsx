import { FieldLabel } from "../atoms/FieldLabel";
import { RangeInput } from "../atoms/RangeInput";

export function DistanceFilter({
  value,
  maximumKm,
  disabled,
  onChange,
}) {
  return (
    <div className="searchField">
      <div className="distanceHeader">
        <FieldLabel htmlFor="maximumDistanceKm">
          A no más de
        </FieldLabel>

        <span className="distanceValue">
          {disabled ? "Elige un centro" : `${value} km`}
        </span>
      </div>

      <RangeInput
        id="maximumDistanceKm"
        min={0}
        max={disabled ? 5 : maximumKm}
        step={0.1}
        unit="km"
        value={disabled ? 0 : value}
        disabled={disabled}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </div>
  );
}
