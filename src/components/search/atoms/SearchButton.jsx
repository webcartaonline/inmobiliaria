export function SearchButton({ type = "submit" }) {
  return (
    <button className="searchButton" type={type}>
      <svg
        className="searchIcon"
        aria-hidden="true"
        viewBox="0 0 24 24"
        width="15"
        height="15"
        fill="none"
      >
        <circle
          cx="11"
          cy="11"
          r="6"
          stroke="currentColor"
          strokeWidth="2"
        />

        <path
          d="m16 16 4 4"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>

      <span>Buscar piso</span>
    </button>
  );
}