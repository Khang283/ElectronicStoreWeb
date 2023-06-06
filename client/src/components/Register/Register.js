import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setUser } from '../../reducer/userReducer';

function RegistrationForm() {
  const navigate = useNavigate();
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [passwordRetype,setPasswordRetype] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [address,setAddress] = useState('');
  const [gender,setGender] = useState('');
  const [dob,setDob] = useState('');
  const dispatch = useDispatch();
  
  function validUserEmail(email){
    let validText = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gm ;
    if(email.match(validText)){
      return true;
    }
    return false
  }

  function validPassword(password,passwordRetype){
    if(password===passwordRetype)return true;
    if(password==='' || passwordRetype==='') return false;
    return false;
  }
  function validPhone(phone){
    let phoneValid = /^0\d{9}$/gm ;
    if(phone.match(phoneValid)){
      return true;
    }
    return false;
  }

  function validUser(){
    if(validUserEmail(email) && validPassword(password,passwordRetype) && validPhone(phone)){
      if(username!=='' && (gender==='male' || gender ==='female') && address!=='' && dob!==''){
        return true;
      }
    }
    return false;
  }

  function handleNewAccountRequest() {
    if(!validUser()){
      alert("Xin hãy nhập lại thông tin");
      return ;
    }
    let date = new Date(dob);
    let day = date.getDate();
    if(day<10) day = `0${day}`;
    let month = date.getMonth() + 1;
    if(month<10) month = `0${month}`;
    let year = date.getFullYear();
    let newDob = day+"-"+month+"-"+year;


    const requestPayload ={
      username,
      password,
      userEmail: email,
      gender,
      userAddress: address,
      userPhone: phone,
      dob: newDob,
    }
    console.log(requestPayload);

    axios.post('/api/v1/signup',requestPayload)
    .then(res=>{
      let token = res.data.token;
      if(token){
        const user = {
          userId: res.data.userId,
          username: res.data.username,
          role: res.data.role
        }
        dispatch(setUser(user))
        Cookies.set('authToken',token,{expires: 1});
        navigate('/');
      }
    })
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
                    id="username"
                    placeholder="Tài khoản"
                    onChange={e => setUsername(e.target.value)}
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
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="password"
                    className="form-control form-control-lg"
                    placeholder="Mật khẩu"
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    id="password_retype"
                    placeholder="Nhập lại mật khẩu"
                    onChange={e => setPasswordRetype(e.target.value)}
                  />
                </div>
                <div className="text-center">
                  <label className="form-label text-danger d-none text_info d-none">
                    Mật khẩu không trùng khớp
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input 
                    placeholder='Nhập địa chỉ của bạn'
                    type='text'
                    id='userAddress'
                    className="form-control form-control-lg"
                    onChange={e => setAddress(e.target.value)}>
                  </input>
                </div>
                <div className="form-outline mb-4">
                  <input 
                    placeholder='Nhập số điện thoại của bạn'
                    type='tel'
                    id='userPhone'
                    className="form-control form-control-lg"
                    onChange={e => setPhone(e.target.value)}>
                  </input>
                </div>
                <div className="form-outline mb-4">
                  <select name="gender" id="gender" 
                          className='form-select form-select-lg mb-3' 
                          onChange={e => setGender(e.target.value)}>
                    <option selected>Chọn giới tính</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="form-outline mb-4">
                  <input 
                    placeholder='Nhập ngày sinh của bạn'
                    type='date'
                    id='dob'
                    className="form-control form-control-lg"
                    onChange={e => setDob(e.target.value)}>
                  </input>
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
                  <Link to={'/login'} className="fw-bold text-decoration-none text-primary">Đăng nhập</Link>
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