// src/components/CustomInput.jsx
import React from "react";
import "./CustomInput.css";

const CustomInput = ({
  label,
  type = "text",
  name,
  value,
  placeholder,
  onChange,
  className = "",
  error,
  required = false,
  options = [],
  width = "100%",
  height = "2rem",
}) => {
  return (
    <div className={`custom-input ${className}`} style={{ width }}>
      {label && (
        <label className="custom-input__label">
          {label}{" "}
          {required && <span className="custom-input__required">*</span>}
        </label>
      )}

      {type === "select" ? (
        <select
          name={name}
          value={value}
          onChange={onChange}
          className={`custom-input__select ${
            error ? "custom-input__input--error" : ""
          }`}
          style={{ height }}
          required={required}>
          <option value="" disabled>
            {placeholder || "Select an option"}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className={`custom-input__input ${
            error ? "custom-input__input--error" : ""
          }`}
          style={{ height }}
          required={required}
        />
      )}

      {error && <span className="custom-input__error">{error}</span>}
    </div>
  );
};

export default CustomInput;
