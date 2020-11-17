import React, { useState, forwardRef } from "react";
import PropTypes from "prop-types";
import "./Input.css";

const Input = forwardRef((props, ref) => {
  const {
    value,
    placeholder,
    autoFocus = false,
    label,
    required,
    events = {},
  } = props;
  const { onChange } = events;
  const [focus, setFocus] = useState(autoFocus);
  const [interalValue, setInternalValue] = useState(value);

  const changeEvent = (event) => {
    setInternalValue(event.target.value);
    if (typeof onChange === "function") {
      onChange(event.target.value);
    }
  };

  const stateEvent = (state) => {
    setFocus(state);
  };

  return (
    <div
      className={`input${required && !interalValue && !focus ? " error" : ""}`}
    >
      {label && (
        <label className={focus || interalValue ? "focus" : ""}>{label}</label>
      )}

      <input
        ref={ref}
        value={interalValue}
        placeholder={placeholder}
        type="text"
        onFocus={() => stateEvent(true)}
        onBlur={() => stateEvent(false)}
        onChange={changeEvent}
      />
    </div>
  );
});

Input.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  events: PropTypes.object,
};

export default Input;
