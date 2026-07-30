export function PriceInput({ id, value, onChange }) {
  return (
    <div className="priceInput">
      <span className="priceCurrency" aria-hidden="true">
        €
      </span>

      <input
        id={id}
        className="priceValueInput"
        type="number"
        min="0"
        step="10"
        value={value}
        placeholder="500"
        onChange={onChange}
      />
    </div>
  );
}