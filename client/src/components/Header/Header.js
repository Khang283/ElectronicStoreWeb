import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import '../Header/Header.css';
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { Image } from "react-bootstrap";
import Cookies from "js-cookie";
import { loadUser, setUser } from "../../reducer/userReducer";
import axios from "axios";
/*const UserMenu = (
  <img
    src={'../user.png'}
    alt="UserName profile image"
    roundedCircle
    style={{ width: '40px', height: '40px' }}
  />
) //Test thu hinh anh dai dien */
function Header() {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  let userId, username, role;
  const [keyword, setKeyword] = useState();
  const navigate = useNavigate();
  if (userState.isLoad == false) {
    axios.get('/api/user/me', {
      headers: {
        Authorization: `Bearer ${Cookies.get('authToken')}`,
      }
    })
      .then((res) => {
        if (res.status === 200) {
          const user = {
            userId: res.data.userId,
            username: res.data.username,
            role: res.data.role,
          };
          dispatch(setUser(user));
        }
      })
      .catch(e => {
        console.log(e);
      });
  }
  userId = userState.userId;
  username = userState.username;
  role = userState.role;

  const handleLogout = () => {
    Cookies.remove('authToken');
    const user = {
      userId: -1,
      username: '',
      role: 'USER',
      isLoad: false,
    };
    dispatch(setUser(user));
    navigate('/');
  }

  const searchClicked = () => {
    if (keyword == '') {
      return null;
    }
    else {
      navigate(`/search/${keyword}`);
    }

  }

  return (
    <Navbar collapseOnSelect bg="danger" expand="lg" className="row bg-radient">
      <Container>
        <Navbar.Brand className="col-lg-2 text-light">
          <Link to={'/'} className="nav-link">
            <Image src="../Logo.png" alt="Logo.png" ></Image>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="reponsive-navbar-nav">
          {/*<Nav className="me-auto" style={{marginLeft:20, marginRight:20}}>
             
            <Nav.Link className="nav-links" style={{marginLeft:10, marginRight:10}} href="#productdetail"><img src="../cell-phone.png" alt="phone
            " width={15} height={15}></img> Điện thoại </Nav.Link>
            <Nav.Link className="nav-links" style={{marginLeft:10, marginRight:10}} href="#productdetail"> <img src="../laptop.png" alt="laptop" width={15} height={15}></img> Laptop</Nav.Link>
            <Nav.Link className="nav-links" style={{marginLeft:10, marginRight:10}} href="#productdetail"><img src="../adapter.png" alt="adapter" width={15} height={15}></img> Phụ kiện</Nav.Link>
            <Nav.Link className="nav-links" style={{marginLeft:10, marginRight:10}} href="#productdetail"><img src="../tablet.png" alt="tablet" width={15} height={15}></img> Tablet</Nav.Link>
            <Form style = {{width:400, marginLeft:10, marginRight:10}} className = "d-flex input-lg form-inline"> <Form.Control type="search" placeholder="Nhập tên sản phẩm mà bạn muốn tìm..." className = "me-2" aria-label="Search"/></Form>
            <img src="../searchButton.png" width={40} height={40} bg="white" alt="search" border={0}/>
            
    </Nav> //Test thu thanh nav */}
          <Nav className="me-auto col-lg-8" style={{ marginLeft: 20, marginRight: 20 }}>
            <Link to={'/phone'} className="textlink">
              <NavDropdown marginLeft={40} marginRight={30} className="dropdown" renderMenuOnMount={true} title={
                <p className="text-light">
                  Điện thoại<i class="bi bi-phone"></i>
                </p>} id="collasible-nav-dropdown">
                <NavDropdown.Item className=".dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <Link to={'/phone/apple'} className="textdropdown">Iphone</Link>
                </NavDropdown.Item>
                <NavDropdown.Item className=".dropdown-menu" >
                  <Link to={'/phone/samsung'} className="textdropdown">Samsung</Link>
                </NavDropdown.Item>
                <NavDropdown.Item className=".dropdown-menu">
                  <Link to={'/phone/oppo'} className="textdropdown">Redmi</Link>
                </NavDropdown.Item>

              </NavDropdown></Link>
            <Link to={'/laptop'} className="textlink">
              <NavDropdown marginLeft={30} marginRight={30} className="dropdown" renderMenuOnMount={true} title={
                <p className="text-light">
                  Laptop
                  <i class="bi bi-laptop"></i></p>
              } id="collasible-nav-dropdown">
                <NavDropdown.Item className=".dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <Link to={'/laptop/asus'} className="textdropdown">Asus</Link>
                </NavDropdown.Item>
                <NavDropdown.Item className=".dropdown-menu">
                  <Link to={'/laptop/dell'} className="textdropdown">Dell</Link>
                </NavDropdown.Item>
                <NavDropdown.Item className=".dropdown-menu" >
                  <Link to={'/laptop/msi'} className="textdropdown">Msi</Link>
                </NavDropdown.Item>

              </NavDropdown>
            </Link>
            <Link to={'/tablet'} className="textlink">
              <NavDropdown marginLeft={30} marginRight={30} className="dropdown" renderMenuOnMount={true} title={
                <p className="text-light" >
                  Tablet
                  <i class="bi bi-tablet"></i></p>
              } id="collasible-nav-dropdown">
                <NavDropdown.Item className=".dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <Link to={'/tablet/samsung'} className="textdropdown">Samsung</Link>
                </NavDropdown.Item>
                <NavDropdown.Item className=".dropdown-menu">
                  <Link to={'/category/tablet/apple'} className="textdropdown">Ipad</Link>
                </NavDropdown.Item>

              </NavDropdown>
            </Link>
            <Link to={'/accessories'} className="textlink">
              <NavDropdown marginLeft={30} marginRight={30} className="dropdown" renderMenuOnMount={true} title={
                <p className="text-light">
                  Phụ kiện <i class="bi bi-headphones"></i></p>
              } id="collasible-nav-dropdown">
                <NavDropdown.Item className=".dropdown-menu" aria-labelledby="dropdownMenuButton" >
                  <Link to={'/chuột'} className="textdropdown">Chuột</Link>
                </NavDropdown.Item>
                <NavDropdown.Item className=".dropdown-menu" >
                  <Link to={'/bàn phím'} className="textdropdown">Bàn phím</Link>
                </NavDropdown.Item>
                <NavDropdown.Item className=".dropdown-menu">
                  <Link to={'/tai nghe'} className="textdropdown">Tai nghe</Link>
                </NavDropdown.Item>

              </NavDropdown>
            </Link>

            <Form style={{ width: 200, height: 20, marginRight: 20 }} className="d-flex input-lg form-inline ml-5 ">
              <Form.Control type="search" placeholder="Nhập tên sản phẩm" className="me-2" aria-label="Search" onChange={e => setKeyword(e.target.value)} />
            </Form>
            <Button className="bg-danger border-0" onClick={searchClicked}><img src="../searchButton.png" width={30} height={30} className="ml-2 mr-auto" alt="search" border={0} /></Button>
          </Nav>


          {/*<Nav>
          <NavDropdown href="#account" className="dropdown" renderMenuOnMount={true} title="Tài khoản" id="collasible-nav-dropdown">
              <NavDropdown.Item className=".dropdown-menu" aria-labelledby="dropdownMenuButton" href="#action/3.1">Đăng kí</NavDropdown.Item>
              <NavDropdown.Item href="#login">Đăng nhập</NavDropdown.Item>
              <NavDropdown.Item href="#cart">Giỏ hàng</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#logout">
                Đăng xuất
              </NavDropdown.Item>
            </NavDropdown>
    </Nav>*/}



        </Navbar.Collapse >
        
        
        <Navbar.Collapse id="reponsive-navbar-nav">
          {userId == -1 ?
            <NavDropdown marginLeft={20} marginRight={20} className="dropdown text-center text-light" renderMenuOnMount={true} title={<p className="text-light">{userId != -1 ? username : 'Tài khoản'} <img src="../user.png" alt="user" width={30} height={30}></img></p>} id="collasible-nav-dropdown">
              <NavDropdown.Item className=".dropdown-menu" aria-labelledby="dropdownMenuButton" >
                <Link to={'/login'}>Đăng nhập</Link>
              </NavDropdown.Item>
              <NavDropdown.Item >
                <Link to={'/registry'} >Đăng ký</Link>
              </NavDropdown.Item>
            </NavDropdown>
            :
            <NavDropdown marginLeft={20} marginRight={20} className="dropdown text-center text-light" renderMenuOnMount={true} title={<p className="text-light">{userId != -1 ? username : 'Tài khoản'} <img src="../user.png" alt="user" width={30} height={30}></img></p>} id="collasible-nav-dropdown">
              {role == 'ADMIN' ?
                <NavDropdown.Item>
                  <Link to={'/admin/product'}>Admin</Link>
                </NavDropdown.Item>
                :
                null
              }
              <NavDropdown.Item >
                <Link to={'/account'} >Tài khoản</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to={'/cart'}>Giỏ hàng</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleLogout}>
                Đăng xuất
              </NavDropdown.Item>
            </NavDropdown>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;