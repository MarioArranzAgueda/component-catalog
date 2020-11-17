import { forwardRef, useState } from "react";
import PropTypes from "prop-types";

import "./Checkbox.css";

const Checkbox = forwardRef((props, ref) => {
  const {
    label,
    isChecked,
    disabled,
    labelDirection = "left",
    events = {},
  } = props;

  const { onChangeEvent } = events;
  const [checked, setChecked] = useState(isChecked);

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
          ref={ref}
          disabled={disabled}
          checked={checked}
          onChange={handleChange}
        ></input>
        {labelDirection === "right" ? label : null}
      </label>
    </div>
  );
});

Checkbox.propTypes = {
  labelDirection: PropTypes.oneOf(["right", "left"]),
  label: PropTypes.string,
  isChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  events: PropTypes.object,
};
export default Checkbox;
