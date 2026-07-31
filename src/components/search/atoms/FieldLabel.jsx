export function FieldLabel({ htmlFor, children }) {
  return (
    <label className="fieldLabel" htmlFor={htmlFor}>
      {children}
    </label>
  );
}