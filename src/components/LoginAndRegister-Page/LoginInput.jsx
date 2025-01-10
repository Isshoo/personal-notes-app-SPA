import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  async function onLogin(event) {
    event.preventDefault();
    await login({ email, password });
  }

  return (
    <form onSubmit={onLogin} className="login-input">
      <input type="email" placeholder="Email" value={email} onChange={onEmailChange} />
      <input type="password" placeholder="Password" value={password} onChange={onPasswordChange} />
      <button>Masuk</button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
