export function RangeInput({
  id,
  value,
  min,
  max,
  step = 1,
  unit = "",
  disabled = false,
  onChange,
}) {
  return (
    <div className="rangeControl">
      <input
        id={id}
        className="rangeInput"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        disabled={disabled}
        aria-valuetext={`${value} ${unit}`.trim()}
        onChange={onChange}
      />

      <div className="rangeScale" aria-hidden="true">
        <span>
          {min} {unit}
        </span>

        <span>
          {max} {unit}
        </span>
      </div>
    </div>
  );
}