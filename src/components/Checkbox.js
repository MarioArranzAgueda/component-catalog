import { useEffect, useState } from "react";
import "./Checkbox.css";
export default function Checkbox(props) {
  const {
    label,
    isChecked,
    disabled,
    labelDirection = "left",
    events = {},
  } = props;

  const { onChangeEvent } = events;
  const [checked, setChecked] = useState(isChecked);

  useEffect(() => {});

  const handleChange = (event) => {
    setChecked(event.target.checked);
    if (typeof onChangeEvent === "function") {
      onChangeEvent(event.target.checked);
    }
  };
  return (
    <div className={`checkbox${disabled ? " disabled" : ""}`}>
      <label>
        {labelDirection === "left" ? label : null}
        <input
          type="checkbox"
          disabled={disabled}
          checked={checked}
          onChange={handleChange}
        ></input>
        {labelDirection === "right" ? label : null}
      </label>
    </div>
  );
}
