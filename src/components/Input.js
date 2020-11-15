import "./Input.css";
import React, { useState, useEffect } from "react";
export default function Input(props) {
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
  const textInput = React.createRef();

  useEffect(() => {
    if (focus) {
      textInput.current.focus();
    }
  });

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
        value={interalValue}
        placeholder={placeholder}
        ref={textInput}
        type="text"
        onFocus={() => stateEvent(true)}
        onBlur={() => stateEvent(false)}
        onChange={changeEvent}
      />
    </div>
  );
}
