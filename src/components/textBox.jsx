import React from "react";

function TextInput({ name, value, onChange, placeholder, className }) {
  return (
    <input
      type="text"
      name={name}  // ← This is the crucial fix
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
    />
  );
}

export default TextInput;
