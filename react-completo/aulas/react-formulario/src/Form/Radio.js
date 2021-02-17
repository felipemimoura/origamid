import React from "react";

export default function Radio({
  pergunta,
  options,
  id,
  onChange,
  value,
  active,
}) {

    
  if (active === false) return null;
  return (
    <fieldset style={{ padding: "2rem" }}>
      <legend style={{ fontWeight: "bold" }}>{pergunta}</legend>
      {options.map((option) => (
        <label
          key={option}
          style={{ marginBottom: "1rem", fontFamily: "monospace" }}
        >
          <input
            id={id}
            type="radio"
            checked={value === option}
            value={option}
            onChange={onChange}
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
}
