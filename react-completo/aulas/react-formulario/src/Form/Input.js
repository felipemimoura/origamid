import React from "react";

export default function Input({ label, id, value, setValue, ...props}) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        nome={id}
        id={id}
        type="text"
        value={value}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      />
    </>
  );
}
