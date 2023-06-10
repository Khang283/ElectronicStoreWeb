import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../reducer/userReducer';
import { useAlert } from 'react-alert';

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch();
    const alert = useAlert();

    const handleLogin = () => {
        
        const loginResquest ={
            username,
            password
        }

        console.log(username);
        console.log(password);
        
        axios.post("/api/v1/login",loginResquest)
        .then(res=>{
            if(res.status===200){
                const token = res.data.token;
                console.log(token);
                if(token!=''){
                    const user = {
                        userId: res.data.userId,
                        username: res.data.username,
                        role: res.data.role,
                    }
                    Cookies.set('authToken',token,{expires: 1});
                    dispatch(setUser(user));
                    alert.success("Đăng nhập thành công")
                    navigate('/');
                }
            }
        }).catch(e=>{
            console.log(e);
            alert.error("Đăng nhập không thành công")
        })
            
    };

    return (
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card text-dark" style={{ borderRadius: '1rem' }}>
                        <div className="card-body p-5 text-center">
                            <div className="mb-md-5 mt-md-4 pb-5">
                                <h2 className="fw-bold mb-4 text-uppercase">Đăng nhập</h2>
                                <label className="form-label d-none" id="checkExist">
                                    {errorMessage}
                                </label>
                                <div className="form-outline mb-4">
                                    <input
                                        type="name"
                                        id="user"
                                        className="form-control form-control-lg"
                                        placeholder="Tài khoản"
                                        value={username}
                                        onChange={e => setUsername(e.target.value)}
                                    />
                                </div>
                                <div className="form-outline mb-4">
                                    <input
                                        type="password"
                                        id="pwd"
                                        className="form-control form-control-lg"
                                        placeholder="Mật khẩu"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </div>

                                <p className="small mb-4 pb-lg-2">
                                    <a
                                        className="text-primary text-decoration-none"
                                        href="fb.com"
                                    >
                                        Quên mật khẩu?
                                    </a>
                                </p>
                                <button
                                    className="btn btn-primary btn-block btn-lg "
                                    onClick={handleLogin}
                                >
                                    Đăng nhập
                                </button>
                            </div>
                            <div>
                                <p className="mb-0">
                                    Bạn chưa có tài khoản?{' '}
                                    <Link to={'/registry'} className="text-primary text-decoration-none fw-bold">Đăng ký</Link>
                                </p>
                            </div>
                            <hr class="my-4"></hr>
                            <button className="btn btn-lg btn-block btn-primary" style={{ backgroundColor: '#dd4b39' }}>
                                <i className="fab fa-google"></i> Đăng nhập bằng Google
                            </button>
                            <button className="btn btn-lg btn-block btn-primary mb-2" style={{ backgroundColor: '#3b5998' }}>
                                <i className="fab fa-facebook-f"></i> Đăng nhập bằng Facebook
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;