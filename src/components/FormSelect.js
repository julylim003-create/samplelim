// src/components/FormSelect.jsx
import React from 'react';

// Reusable select dropdown wrapper
export default function FormSelect({ id, label, value, onChange, onBlur, error, touched, options }) {
  // Check CSS class for validation
  const selectClass = !touched ? '' : error ? 'is-invalid' : 'is-valid';

  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      <select id={id} className={selectClass} value={value} onChange={onChange} onBlur={onBlur}>
        <option value="">Select {label}</option>
        {/* Used array to create drop-down choices */}
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {/* Display error message only when touched */}
      <small id={`${id}Error`}>{touched && error}</small>
    </div>
  );
}