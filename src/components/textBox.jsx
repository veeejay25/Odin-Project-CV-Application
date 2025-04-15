// Odin-Project-CV-Application/src/components/textBox.jsx
import React from "react";

function TextInput({ name, value, onChange, placeholder, className, style, multiline }) {
  return multiline ? (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      style={style}
    />
  ) : (
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      style={style}
    />
  );
}

export default TextInput;