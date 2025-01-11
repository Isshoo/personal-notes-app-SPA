import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';
import useVisibility from '../../hooks/useVisibility';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';
import LocaleContext from '../../contexts/LocaleContext';

function LoginInput({ login }) {
  const { locale } = useContext(LocaleContext);
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [showPassword, setShowPassword] = useVisibility(false);

  async function onLogin(event) {
    event.preventDefault();
    await login({ email, password });
  }

  return (
    <form id="loginForm" className="logreg-form" autoComplete="on" onSubmit={onLogin}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="email form-input"
          required
          placeholder="Email"
          value={email}
          onChange={onEmailChange}
        />
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
            value={password}
            onChange={onPasswordChange}
          />
          <button type="button" className="toggle-password" onClick={setShowPassword}>
            {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </button>
        </div>
      </div>
      <button type="submit" id="loginSubmit" className="submit-btn">
        {locale === 'EN' ? 'Login' : 'Masuk'}
      </button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
