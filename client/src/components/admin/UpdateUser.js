import React, { useEffect, Fragment } from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from "react-bootstrap/Modal";
import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Tab, { FormControl } from "react-bootstrap";
import { useSelector } from "react-redux";
import axios from "axios";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";
import MetaData from '../layout/MetaData'
import Loader from '../layout/Loader'
import Sidebar from './Sidebar'
import moment from "moment/moment";
import AlertTemplate from "react-alert-template-basic";
import { useAlert } from "react-alert";
import Popup from "reactjs-popup";
import { ConsoleSqlOutlined } from "@ant-design/icons";


function UpdateUser() {
    const { userid } = useParams();
    const [show, setShow] = useState(false);
    const [pwdshow, setPwdShow] = useState(false);
    const closeDialog = () => setShow(false);
    const openDialog = () => setShow(true);
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState("male");
    const radios = [
        { name: 'Nữ', value: 'female' },
        { name: 'Nam', value: 'male' },
    ];
    const openPassword = () => setPwdShow(true);
    const closePassWord = () => setPwdShow(false);
    const userState = useSelector(state => state.user);
    const [user, setUser] = useState({})
    const [loading, setLoad] = useState(true);
    const [username, setUsername] = useState();
    const [address, setAddress] = useState();
    const [email, setEmail] = useState();
    const [gender, setGender] = useState();
    const [dob, setDob] = useState();
    const [phone, setPhone] = useState();
    const [role,setRole] = useState();
    const [oldPassword, setOldPass] = useState();
    const [newPassword, setNewPass] = useState();
    const [confirmPass, setConfirm] = useState();
    const alert = useAlert();
    const [modfify, setModify] = useState(false);

    useEffect(() => {
        axios.get('/api/user?id=' + userid, {
            headers: {
                Authorization: `Bearer ${Cookies.get('authToken')}`
            }
        }).then((res) => {
            if (res.status == 200) {
                setUser(res.data);
                setUsername(res.data.username);
                setAddress(res.data.address);
                setEmail(res.data.email);
                let date = new Date(res.data.dob);
                let day = date.getDate();
                if (day < 10) day = `0${day}`;
                let month = date.getMonth() + 1;
                if (month < 10) month = `0${month}`;
                let year = date.getFullYear();
                let newDob = year + "-" + month + "-" + day;
                setDob(newDob);
                setGender(res.data.gender);
                setPhone(res.data.phone);
                setRole(res.data.role);
                setLoad(false)
            }
        }).catch(e => {
            console.log(e);
        })

    }, [modfify,role]);
    const handleUpdate = () => {
        const userRequest = {
            id: user.userId,
            username,
            address,
            email,
            phone,
            gender,
            dob,
            role: "USER"
        }
        console.log(userRequest);
        axios.put('/api/user', userRequest, {
            headers: {
                Authorization: `Bearer ${Cookies.get('authToken')}`,
            }
        }).then(res => {
            if (res.status === 200) {
                closeDialog();
                alert.success("Cập nhật thông tin thành công");
                setModify(true);
            }
        }).catch(e => {
            closeDialog();
            alert.error("Đã xảy ra lỗi");
        })
    }
    if (userState.userId == -1) {
        return (
            <div>
                <h2>Bạn chưa đăng nhập</h2>
            </div>
        )
    }

    const handlePasswordChange = () => {
        const payload = {
            id: user.userId,
            oldPassword: "",
            newPassword: newPassword
        };

        if (newPassword != confirmPass) {
            alert.error("Xin chọn lại mật khẩu mới");
        }
        else {

            axios.put('/api/user/admin/password', payload, {
                headers: {
                    Authorization: `Bearer ${Cookies.get('authToken')}`,
                }
            }).then(res => {
                if (res.status === 200) {
                    alert.success("Đổi mật khẩu thành công");
                }
            }).catch(e => {
                console.log(e);
            })
        }

    }

    const handleUpdateRole =()=>{
        console.log(role);
        const payload = {
            id: user.userId,
            role
        }
        console.log(payload);
        axios.post('/api/user/admin/role',payload,{
            headers: {
                Authorization: `Bearer ${Cookies.get('authToken')}`,
            }
        }).then(res=>{
            if(res.status === 200){
                alert.success("Thay đổi quyền thành công");
                setRole(role);
                setModify(true);
            }
        }).catch(e=>{
            console.log(e);
            alert.error("Đã xảy ra lỗi");
        })
    }


    return (
        <Fragment>
            <MetaData title={'All Users'} />
            <div className="row">
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>

                <div className="col-12 col-md-10">
                    {loading ? <Loader /> :
                        <Fragment>
                            <Container>
                                <div className="row">
                                    <div className="col-12">
                                        <h3 className="p-2">Thông tin của người dùng</h3>
                                    </div>
                                </div>
                                <Form className="file-upload">
                                    <div class="row mb-1 gx-5">
                                        <div className="col-xxl-4 mb-5">
                                            <div className="bg-secondary-soft px-4 py-5 rounded">
                                                <div className="row g-3">
                                                    <h4 className="text-center mb-4 mt-0">{user.username}</h4>
                                                    <div className="text-center mb-3 mt-4">
                                                        <div className="square position-relative display-2 mb-3 pb-2">
                                                            <i className="fas fa-fw fa-user position-absolute top-50 start-50 translate-middle text-secondary"></i>
                                                        </div>
                                                    </div>
                                                    <Button onClick={openPassword} className="text-center btn btn-primary btn-md">Thay đổi mật khẩu</Button>
                                                    <Popup modal trigger={<Button variant="danger" className="text-center btn btn-md">Quyền quản trị</Button>}>
                                                        <div>
                                                            <h2 className="text-center">Thay đổi quyền quản trị</h2>
                                                            <hr />

                                                            <Form.Select aria-label="Role select" className="col-md-12 mb-3" value={role} onChange={e=>setRole(e.target.value)}>
                                                                <option value="USER">USER</option>
                                                                <option value="ADMIN" >ADMIN</option>
                                                            </Form.Select>
                                                            <Button variant="danger" className="text-center" onClick={handleUpdateRole}>Xác nhận</Button>
                                                        </div>
                                                    </Popup>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="col-xxl-8 mb-5 mb-xxl-0">
                                            <div class="bg-secondary-soft px-4 py-5 rounded">
                                                <div class="row g-3">
                                                    <h4 class="mb-4 mt-0">Thông tin liên hệ</h4>
                                                    <div class="col-md-6">
                                                        <Form.Group className="mb-3" controlId="name">
                                                            <Form.Label>Họ và Tên *</Form.Label>
                                                            <Form.Control className="form-control" type="text" placeholder={user.username} onChange={e => setUsername(e.target.value)}></Form.Control>
                                                        </Form.Group>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <Form.Group className="mb-3" controlId="phone">
                                                            <Form.Label>Số điện thoại *</Form.Label>
                                                            <Form.Control className="form-control" type="text" placeholder={user.phone} onChange={e => setPhone(e.targer.value)}></Form.Control>
                                                        </Form.Group>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <Form.Group className="mb-3" controlId="mail">
                                                            <Form.Label>Email *</Form.Label>
                                                            <Form.Control plaintext readOnly defaultValue={user.email} onChange={e => setEmail(e.targer.value)}></Form.Control>
                                                        </Form.Group>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <Form.Group className="mb-3" controlId="DOB">
                                                            <Form.Label>Ngày sinh *</Form.Label>
                                                            <Form.Control className="form-control" type="date" value={dob} onChange={e => setDob(e.target.value)}></Form.Control>
                                                        </Form.Group>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <Form.Group className="mb-3" controlId="address">
                                                            <Form.Label>Địa chỉ *</Form.Label>
                                                            <Form.Control className="form-control" type="text" placeholder={user.address} onChange={e => setAddress(e.target.value)}></Form.Control>
                                                        </Form.Group>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <Form.Group className="mb-3" controlId="address">
                                                            <Form.Label>Giới tính *</Form.Label>
                                                            <br></br>
                                                            <ButtonGroup className="mb-3">
                                                                {radios.map((radio, idx) => (
                                                                    <ToggleButton
                                                                        key={idx}
                                                                        id={`radio-${idx}`}
                                                                        type="radio"
                                                                        variant={idx % 2 ? 'outline-primary' : 'outline-danger'}
                                                                        name="radio"
                                                                        value={gender}
                                                                        checked={radioValue == gender}
                                                                        onChange={(e) => setGender(e.target.value)}
                                                                        className="rounded-button m-1"
                                                                    >
                                                                        {radio.name}
                                                                    </ToggleButton>

                                                                ))}
                                                            </ButtonGroup>
                                                        </Form.Group>
                                                    </div>

                                                </div>
                                            </div>

                                            {/*<div class="col-xxl-4">
						<div class="bg-secondary-soft px-4 py-5 rounded">
							<div class="row g-3">
								<h4 class="mb-4 mt-0">Upload your profile photo</h4>
								<div class="text-center">
						
									<div class="square position-relative display-2 mb-3">
										<i class="fas fa-fw fa-user position-absolute top-50 start-50 translate-middle text-secondary"></i>
									</div>

									
									<label class="btn btn-success-soft btn-block" for="customFile">Upload</label>
									<button type="button" class="btn btn-danger-soft">Remove</button>
									
									<p class="text-muted mt-3 mb-0"><span class="me-1">Note:</span>Minimum size 300px x 300px</p>
								</div>
							</div>
						</div>
					</div>*/}
                                        </div>

                                    </div>
                                    <div class="row mb-5 gx-5">

                                        <div class="bg-secondary-soft px-4 py-5 rounded">
                                            <div class="gap-3 d-md-flex justify-content-md-end text-center">
                                                <Button onClick={openDialog} className="btn btn-primary btn-lg">Lưu thông tin</Button>
                                                <Modal show={show} onHide={closeDialog}>
                                                    <Modal.Header closeButton>
                                                        <Modal.Title>Lưu thông tin</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>Bạn có xác nhận lưu / thay đổi thông tin không?</Modal.Body>
                                                    <Modal.Footer>
                                                        <Button variant="secondary" onClick={closeDialog}>
                                                            Huỷ
                                                        </Button>
                                                        <Button variant="primary" onClick={handleUpdate}>
                                                            Xác nhận
                                                        </Button>
                                                    </Modal.Footer>
                                                </Modal>
                                                <Modal show={pwdshow} onHide={closePassWord}>
                                                    <Modal.Header closeButton>
                                                        <Modal.Title>Thay đổi mật khẩu</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <div className="row col-xxl-12">

                                                            <Form>
                                                                <Form.Label>Mật khẩu mới *</Form.Label>
                                                                <Form.Control type="password" id="newpwd" onChange={e => setNewPass(e.target.value)}></Form.Control>
                                                            </Form>
                                                            <Form>
                                                                <Form.Label>Xác nhận mật khẩu *</Form.Label>
                                                                <Form.Control type="password" id="confirmpwd" onChange={e => setConfirm(e.target.value)}></Form.Control>
                                                            </Form>
                                                        </div>
                                                    </Modal.Body>
                                                    <Modal.Footer>
                                                        <Button variant="danger" onClick={handlePasswordChange}>
                                                            Xác nhận
                                                        </Button>
                                                    </Modal.Footer>
                                                </Modal>
                                            </div>
                                        </div>
                                    </div>
                                </Form>

                            </Container>
                        </Fragment>
                    }
                </div>
            </div>

        </Fragment>


    );
}
export default UpdateUser;