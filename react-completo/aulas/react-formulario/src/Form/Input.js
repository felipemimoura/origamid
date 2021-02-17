import React from "react";

export default function Input({ label, id, value, onChange, type,onBlur, placeholder, error }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        nome={id}
        id={id}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
        type={type}
        
      />
      {error && <p>{error}</p>}
    </>
  );
}
