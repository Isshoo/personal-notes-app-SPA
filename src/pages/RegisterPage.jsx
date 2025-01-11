import React from 'react';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/LoginAndRegister-Page/RegisterInput';
import { register } from '../utils/network-data';

function RegisterPage() {
  const navigate = useNavigate();

  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      Swal.fire({
        title: 'Berhasil!',
        text: 'Akun berhasil diregistrasi, silahkan login.',
        icon: 'success',
        confirmButtonText: 'OK',
      }).then(() => {
        navigate('/');
      });
    }
  }

  return (
    <section className="pages-section">
      <div className="form-container">
        <h2>Register</h2>
        <RegisterInput register={onRegisterHandler} />
        <p>
          Already have an account? <Link to="/">Login here!</Link>
        </p>
      </div>
    </section>
  );
}

export default RegisterPage;
