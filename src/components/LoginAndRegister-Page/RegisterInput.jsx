import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  async function onRegister(event) {
    event.preventDefault();
    const user = { name, email, password };
    await register(user);
  }

  return (
    <form onSubmit={onRegister} className="register-input">
      <input type="text" placeholder="Nama" value={name} onChange={onNameChange} />
      <input type="email" placeholder="Email" value={email} onChange={onEmailChange} />
      <input type="password" placeholder="Password" value={password} onChange={onPasswordChange} />
      <button>Register</button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
