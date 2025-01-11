import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginAndRegister-Page/LoginInput';
import { login } from '../utils/network-data';

function LoginPage({ loginSuccess }) {
  async function onLoginHandler({ email, password }) {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <section className="pages-section">
      <div className="form-container">
        <h2>Login</h2>
        <LoginInput login={onLoginHandler} />
        <p>
          Don&apos;t have an account? <Link to="/register">Sign up here!</Link>
        </p>
      </div>
    </section>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
