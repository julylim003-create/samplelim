// src/components/FormInput.jsx
import React from 'react';

// Reusable text/email/password/date input wrapper
export default function FormInput({ id, label, type = 'text', placeholder, value, onChange, onBlur, error, touched, isHalf }) {
  // Determine CSS class for validation highlight
  const inputClass = !touched ? '' : error ? 'is-invalid' : 'is-valid';

  return (
    <div className={`input-group ${isHalf ? 'half' : ''}`}>
      <label htmlFor={id}>{label}</label>
      <div className="input-box">
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className={inputClass}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
      {/* Display error message only when touched */}
      <small id={`${id}Error`}>{touched && error}</small>
    </div>
  );
}