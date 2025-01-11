import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';
import useVisibility from '../../hooks/useVisibility';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [showPassword, setShowPassword] = useVisibility(false);

  async function onLogin(event) {
    event.preventDefault();
    await login({ email, password });
  }

  return (
    <form id="loginForm" className="logreg-form" autoComplete="off" onSubmit={onLogin}>
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
          />
          <button type="button" className="toggle-password" onClick={setShowPassword}>
            {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </button>
        </div>
        <p id="passwordValidation" className="validation-message" aria-live="polite"></p>
      </div>
      <button type="submit" id="loginSubmit" className="submit-btn">
        Login
      </button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
