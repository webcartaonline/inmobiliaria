export function Select({
  id,
  value,
  onChange,
  children,
  disabled = false,
}) {
  return (
    <select
      id={id}
      className="selectInput"
      value={value}
      onChange={onChange}
      disabled={disabled}
    >
      {children}
    </select>
  );
}