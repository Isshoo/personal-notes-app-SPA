import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';
import useVisibility from '../../hooks/useVisibility';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [confirmPassword, onConfirmPasswordChange] = useInput('');
  const [showPassword, setShowPassword] = useVisibility(false);

  async function onRegister(event) {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match. Please ensure they match and try again.');
      return;
    }
    const user = { name, email, password };
    await register(user);
  }

  return (
    <form id="registerForm" className="logreg-form" autoComplete="off" onSubmit={onRegister}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="name form-input"
          required
          placeholder="Name"
          aria-describedby="nameValidation"
          value={name}
          onChange={onNameChange}
        />
        <p id="nameValidation" className="validation-message" aria-live="polite"></p>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="email form-input"
          required
          placeholder="Email"
          aria-describedby="emailValidation"
          value={email}
          onChange={onEmailChange}
        />
        <p id="emailValidation" className="validation-message" aria-live="polite"></p>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <div className="password-container">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            className="password form-input"
            required
            placeholder="Password"
            aria-describedby="passwordValidation"
            value={password}
            onChange={onPasswordChange}
          ></input>
          <button type="button" className="toggle-password" onClick={setShowPassword}>
            {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </button>
        </div>
        <p id="passwordValidation" className="validation-message" aria-live="polite"></p>
      </div>
      <div>
        <label htmlFor="confirm-password">Confirm Password</label>
        <div className="password-container">
          <input
            type={showPassword ? 'text' : 'password'}
            id="confirm-password"
            name="confirm-password"
            className="password form-input"
            required
            placeholder="Confirm Password"
            aria-describedby="confirmPasswordValidation"
            value={confirmPassword}
            onChange={onConfirmPasswordChange}
          ></input>
          <button type="button" className="toggle-password" onClick={setShowPassword}>
            {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </button>
        </div>
        <p id="confirmPasswordValidation" className="validation-message" aria-live="polite"></p>
      </div>
      <button type="submit" id="registrationSubmit" className="submit-btn">
        Register
      </button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
