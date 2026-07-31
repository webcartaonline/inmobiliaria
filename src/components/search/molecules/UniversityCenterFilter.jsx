import { FieldLabel } from "../atoms/FieldLabel";
import { Select } from "../atoms/Select";
import { universityCenterGroups } from "../../../data/universityCenters";

export function UniversityCenterFilter({ value, onChange }) {
  return (
    <div className="searchField">
      <FieldLabel htmlFor="universityCenter">
        Facultad o escuela UGR
      </FieldLabel>

      <Select
        id="universityCenter"
        value={value}
        onChange={onChange}
      >
        <option value="">Cualquier centro UGR</option>

        {universityCenterGroups.map((campusGroup) => (
          <optgroup
            key={campusGroup.campusId}
            label={campusGroup.campusName}
          >
            {campusGroup.centers.map((center) => (
              <option key={center.id} value={center.id}>
                {center.name}
              </option>
            ))}
          </optgroup>
        ))}
      </Select>
    </div>
  );
}
