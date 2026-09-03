// src/components/RegistrationForm.jsx
import React, { useState } from 'react';
import FormInput from './FormInput';
import FormSelect from './FormSelect';

// Dropdown of constants
const GENDER_OPTIONS = ['Male', 'Female', 'Rather not say'];
const SKILL_OPTIONS = ['Beginner (2.0 - 2.5)', 'Intermediate (3.0 - 3.5)', 'Advanced (4.0+)'];
const COUNTRY_OPTIONS = ['Philippines', 'Japan', 'United States'];

export default function RegistrationForm({ onSuccess }) {
  // Main input values
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    phone: '',
    email: '',
    gender: '',
    dob: '',
    skillLevel: '',
    company: '',
    homeCountry: '',
    homeCity: '',
    homeStreet: '',
    homeRegion: '',
    homeZip: '',
    password: '',
    confirmPassword: '',
    terms: false,
    offers: false,
  });

  // Track field touch and validation status
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});

  // Validation rules using regex patterns
  const rules = {
    firstName: { regex: /^[A-Za-z ]{2,}$/, msg: 'Letters only.' },
    lastName: { regex: /^[A-Za-z ]{2,}$/, msg: 'Letters only.' },
    username: { regex: /^[A-Za-z0-9_]{4,20}$/, msg: '4-20 letters or numbers.' },
    phone: { regex: /^[0-9]{11}$/, msg: 'Phone number must be exactly 11 digits.' },
    email: { regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, msg: 'Invalid email address.' },
    company: { regex: /^.{2,}$/, msg: 'Company name is required.' },
    dob: { regex: /.+/, msg: 'Please select your birth date.' },
    homeCity: { regex: /^.{2,}$/, msg: 'City/Province is required.' },
    homeStreet: { regex: /^.{3,}$/, msg: 'Street name is required.' },
    homeRegion: { regex: /^.{2,}$/, msg: 'Region is required.' },
    homeZip: { regex: /^[0-9]{4,6}$/, msg: 'Enter a valid zip code (4-6 digits).' },
  };

  // Validates an individual field by ID
  const validateField = (id, value, currentFormData = formData) => {
    let errorMsg = '';
    if (rules[id]) {
      const trimmed = typeof value === 'string' ? value.trim() : value;
      if (trimmed === '') {
        errorMsg = 'This field is required.';
      } else if (!rules[id].regex.test(trimmed)) {
        errorMsg = rules[id].msg;
      }
    } else if (['gender', 'skillLevel', 'homeCountry'].includes(id)) {
      if (!value) errorMsg = 'Please select an option.';
    } else if (id === 'password') {
      if (!value) {
        errorMsg = 'Password is required.';
      } else if (value.length < 8) {
        errorMsg = 'Password must be at least 8 characters.';
      }
    } else if (id === 'confirmPassword') {
      if (!value) {
        errorMsg = 'Confirm your password.';
      } else if (value !== currentFormData.password) {
        errorMsg = 'Passwords do not match.';
      }
    } else if (id === 'terms') {
      if (!value) errorMsg = 'You must agree to the Terms and Conditions.';
    }
    return errorMsg;
  };

  // Handles input updates and live re-validation
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    const updatedData = { ...formData, [id]: fieldValue };
    setFormData(updatedData);

    if (touched[id]) {
      setErrors((prev) => ({
        ...prev,
        [id]: validateField(id, fieldValue, updatedData),
      }));
    }

    if (id === 'password' && touched.confirmPassword) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: validateField('confirmPassword', formData.confirmPassword, updatedData),
      }));
    }
  };

  // Marks field as touched on blur and validates
  const handleBlur = (e) => {
    const { id, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    setTouched((prev) => ({ ...prev, [id]: true }));
    setErrors((prev) => ({
      ...prev,
      [id]: validateField(id, fieldValue),
    }));
  };

  // Handle the final form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const allTouched = Object.keys(formData).reduce(
      (acc, key) => ({ ...acc, [key]: true }),
      {}
    );
    setTouched(allTouched);

    const currentErrors = {};
    Object.keys(formData).forEach((key) => {
      const err = validateField(key, formData[key]);
      if (err) currentErrors[key] = err;
    });

    setErrors(currentErrors);

    if (Object.keys(currentErrors).length > 0) {
      alert('Please correct all highlighted fields.');
    } else if (onSuccess) {
      onSuccess(formData);
    }
  };

  return (
    <div className="register-box">
      <div className="header">
        <span className="ball">●</span>
        <h1>JOIN THE COURT</h1>
        <p className="subtitle">PICKLEBALLIM CLUB PLAYER REGISTRATION</p>
      </div>

      <form id="registerForm" onSubmit={handleSubmit} noValidate>
        {/* Full Name */}
        <div className="row">
          <FormInput id="firstName" label="First Name" placeholder="First Name" value={formData.firstName} onChange={handleChange} onBlur={handleBlur} error={errors.firstName} touched={touched.firstName} />
          <FormInput id="lastName" label="Last Name" placeholder="Last Name" value={formData.lastName} onChange={handleChange} onBlur={handleBlur} error={errors.lastName} touched={touched.lastName} />
        </div>

        {/* Username and Phone */}
        <div className="row">
          <FormInput id="username" label="Username" placeholder="Username" value={formData.username} onChange={handleChange} onBlur={handleBlur} error={errors.username} touched={touched.username} />
          <FormInput id="phone" label="Phone Number" placeholder="09XXXXXXXXX" value={formData.phone} onChange={handleChange} onBlur={handleBlur} error={errors.phone} touched={touched.phone} />
        </div>

        {/* Email */}
        <FormInput id="email" label="Email Address" type="email" placeholder="example@email.com" value={formData.email} onChange={handleChange} onBlur={handleBlur} error={errors.email} touched={touched.email} />

        {/* Gender n bday */}
        <div className="row">
          <FormSelect id="gender" label="Gender" value={formData.gender} onChange={handleChange} onBlur={handleBlur} error={errors.gender} touched={touched.gender} options={GENDER_OPTIONS} />
          <FormInput id="dob" label="Birthday" type="date" value={formData.dob} onChange={handleChange} onBlur={handleBlur} error={errors.dob} touched={touched.dob} />
        </div>

        {/* Skills plus company */}
        <div className="row">
          <FormSelect id="skillLevel" label="Skill Level" value={formData.skillLevel} onChange={handleChange} onBlur={handleBlur} error={errors.skillLevel} touched={touched.skillLevel} options={SKILL_OPTIONS} />
          <FormInput id="company" label="Company Name" placeholder="Your Company Name" value={formData.company} onChange={handleChange} onBlur={handleBlur} error={errors.company} touched={touched.company} />
        </div>

        {/* Address */}
        <div className="section-title">HOME ADDRESS</div>

        <div className="row">
          <FormSelect id="homeCountry" label="Country" value={formData.homeCountry} onChange={handleChange} onBlur={handleBlur} error={errors.homeCountry} touched={touched.homeCountry} options={COUNTRY_OPTIONS} />
          <FormInput id="homeCity" label="City/Province" placeholder="City / Province" value={formData.homeCity} onChange={handleChange} onBlur={handleBlur} error={errors.homeCity} touched={touched.homeCity} />
        </div>

        <div className="row">
          <FormInput id="homeStreet" label="Street Name" placeholder="Street Name" value={formData.homeStreet} onChange={handleChange} onBlur={handleBlur} error={errors.homeStreet} touched={touched.homeStreet} />
          <FormInput id="homeRegion" label="Region" placeholder="Region" value={formData.homeRegion} onChange={handleChange} onBlur={handleBlur} error={errors.homeRegion} touched={touched.homeRegion} />
        </div>

        <div className="row">
          <FormInput id="homeZip" label="Zip Code" placeholder="e.g. 1100" value={formData.homeZip} onChange={handleChange} onBlur={handleBlur} error={errors.homeZip} touched={touched.homeZip} isHalf={true} />
          <div className="input-group"></div>
        </div>

        {/* Password */}
        <div className="section-title">PASSWORD</div>

        <div className="row">
          <FormInput id="password" label="Password" type="password" placeholder="Min. 8 characters" value={formData.password} onChange={handleChange} onBlur={handleBlur} error={errors.password} touched={touched.password} />
          <FormInput id="confirmPassword" label="Confirm Password" type="password" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} onBlur={handleBlur} error={errors.confirmPassword} touched={touched.confirmPassword} />
        </div>

        {/* Checkboxes */}
        <div className="checkbox">
          <input type="checkbox" id="terms" checked={formData.terms} onChange={handleChange} onBlur={handleBlur} />
          <label htmlFor="terms">I agree to the Terms and Conditions</label>
        </div>
        <small id="termsError">{touched.terms && errors.terms}</small>

        <div className="checkbox">
          <input type="checkbox" id="offers" checked={formData.offers} onChange={handleChange} />
          <label htmlFor="offers">Receive updates and promotional offers</label>
        </div>

        <button className="register-button" type="submit">
          RESERVE MY SPOT ON THE COURT
        </button>
      </form>
    </div>
  );
}