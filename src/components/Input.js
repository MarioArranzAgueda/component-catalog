import "./Input.css";
import React, { useState, useEffect } from "react";
export default function Input(props) {
  const { autoFocus = false, label, required } = props;
  const [focus, setFocus] = useState(autoFocus);
  const [text, setText] = useState("");
  const textInput = React.createRef();

  useEffect(() => {
    if (focus) {
      textInput.current.focus();
    }
  });

  const changeEvent = (event) => {
    setText(event.target.value);
  };

  const stateEvent = (state) => {
    setFocus(state);
  };

  return (
    <div className={`input ${required && !text && !focus ? "error" : ""}`}>
      {label && <label className={focus || text ? "focus" : ""}>{label}</label>}

      <input
        ref={textInput}
        type="text"
        onFocus={() => stateEvent(true)}
        onBlur={() => stateEvent(false)}
        onChange={changeEvent}
      />
    </div>
  );
}
