import { FieldLabel } from "../atoms/FieldLabel";
import { Select } from "../atoms/Select";

export function NeighborhoodFilter({ value, onChange }) {
  return (
    <div className="searchField">
      <FieldLabel htmlFor="neighborhood">
        Distrito
      </FieldLabel>

      <Select
        id="neighborhood"
        value={value}
        onChange={onChange}
      >
        <option value="all">Todos los distritos</option>
        <option value="albaicin">Albaicín</option>
        <option value="beiro">Beiro</option>
        <option value="centro">Centro</option>
        <option value="chana">Chana</option>
        <option value="genil">Genil</option>
        <option value="norte">Norte</option>
        <option value="ronda">Ronda</option>
        <option value="zaidin">Zaidín</option>
      </Select>
    </div>
  );
}
