import React, { useState } from 'react';

function RegistrationForm() {
  const [validUser, setValidUser] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [validEmail, setValidEmail] = useState(false);

  function validAccount() {
    if (validUser && validPassword) {
      document.querySelector('.btn_registry').disabled = false;
    } else {
      document.querySelector('.btn_registry').disabled = true;
    }
  }

  function handleUserChange(event) {
    if (event.target.value === '') {
      document.querySelector('.text_user').classList.remove('d-none');
      setValidUser(false);
      validAccount();
    } else {
      document.querySelector('.text_user').classList.add('d-none');
      setValidUser(true);
      validAccount();
    }
  }

  function handlePasswordChange(event) {
    const password = document.querySelector('#passwrd').value;
    const password_retype = event.target.value;

    if (password !== password_retype) {
      document.querySelector('.text_info').classList.remove('d-none');
      setValidPassword(false);
      validAccount();
    } else {
      document.querySelector('.text_info').classList.add('d-none');
      setValidPassword(true);
      validAccount();
    }
  }

  function handleNewAccountRequest() {
    fetch('/login/new/create', {
      method: 'POST',
      body: JSON.stringify({
        username: document.querySelector('#user').value,
        password: document.querySelector('#passwrd').value,
        role: document.querySelector('#roleSelect').value || 'USER',
        email: document.querySelector('#userEmail').value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        window.location.href = '/home';
      })
      .catch((error) => {
        document.querySelector('.check').classList.remove('d-none');
      });
  }

  return (
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card text-dark" style={{ borderRadius: '1rem' }}>
            <div className="card-body p-5 text-center">
              <div className="mb-md-5 mt-md-4 pb-5">
                <h2 className="fw-bold mb-4 text-uppercase">ĐĂNG KÝ</h2>
                <div className="form-outline mb-4">
                  <input
                    type="name"
                    name="username"
                    className="form-control form-control-lg"
                    id="user"
                    placeholder="Tài khoản"
                    onChange={handleUserChange}
                  />
                </div>
                <div className="text-center">
                  <label className="form-label text-danger text_user d-none">
                    Tên tài khoản không được để trống
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email"
                    id="userEmail"
                  />
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="password"
                    className="form-control form-control-lg"
                    placeholder="Mật khẩu"
                  />
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    id="password_retype"
                    placeholder="Nhập lại mật khẩu"
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className="text-center">
                  <label className="form-label text-danger d-none text_info d-none">
                    Mật khẩu không trùng khớp
                  </label>
                </div>

                <br />
                <button
                  className="btn btn-primary btn-block btn-lg"
                  onClick={handleNewAccountRequest}
                >
                  Đăng ký
                </button>
              </div>
              <div>
                <p className="mb-0">
                  Bạn đã có tài khoản?{' '}
                  <a
                    href="/login"
                    className="fw-bold text-decoration-none text-primary"
                  >
                    Đăng nhập
                  </a>
                </p>
              </div>
              <hr class="my-4"></hr>
              <button className="btn btn-lg btn-block btn-primary" style={{ backgroundColor: '#dd4b39' }}>
                <i className="fab fa-google"></i> Đăng ký bằng Google
              </button>
              <button className="btn btn-lg btn-block btn-primary mb-2" style={{ backgroundColor: '#3b5998' }}>
                <i className="fab fa-facebook-f"></i> Đăng ký bằng Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;