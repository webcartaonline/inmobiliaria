import { FieldLabel } from "../atoms/FieldLabel";
import { RangeInput } from "../atoms/RangeInput";

export function WalkingTimeFilter({
  value,
  disabled,
  onChange,
}) {
  const labelText = disabled
    ? "Selecciona un centro para medir el tiempo"
    : `Tiempo máximo a pie: ${value} min`;

  return (
    <div className="searchField">
      <FieldLabel htmlFor="maximumWalkingMinutes">
        {labelText}
      </FieldLabel>

      <RangeInput
        id="maximumWalkingMinutes"
        min={1}
        max={30}
        step={1}
        unit="min"
        value={value}
        disabled={disabled}
        onChange={onChange}
      />
    </div>
  );
}