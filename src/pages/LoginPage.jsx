import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginAndRegister-Page/LoginInput';
import { login } from '../utils/network-data';
import { LocaleConsumer } from '../contexts/LocaleContext';

function LoginPage({ loginSuccess }) {
  async function onLoginHandler({ email, password }) {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <LocaleConsumer>
      {({ locale }) => {
        if (locale === 'EN') {
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
        return (
          <section className="pages-section">
            <div className="form-container">
              <h2>Masuk</h2>
              <LoginInput login={onLoginHandler} />
              <p>
                Belum punya akun? <Link to="/register">Registrasi disini!</Link>
              </p>
            </div>
          </section>
        );
      }}
    </LocaleConsumer>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
