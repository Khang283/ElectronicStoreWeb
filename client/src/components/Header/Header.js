import React from "react";
import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import '../Header/Header.css';
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
/*const UserMenu = (
  <img
    src={'../user.png'}
    alt="UserName profile image"
    roundedCircle
    style={{ width: '40px', height: '40px' }}
  />
) //Test thu hinh anh dai dien */
function SearchClicked() { }
function Header() {
  const userState = useSelector((state) => state.user);
  const userId = userState.userId;
  const username = userState.username;
  const role = userState.role;
  return (
    <Navbar collapseOnSelect bg="danger" expand="lg" className="row bg-radient">
      <Container>
        <Navbar.Brand className="col-lg-2 text-light">
          <Link to={'/'} className="nav-link">
            Electronic Store
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
          <Nav className="me-auto col-lg-8 " style={{ marginLeft: 20, marginRight: 20 }}>
            <NavDropdown marginLeft={30} marginRight={30} href="#productdetail" className="dropdown" renderMenuOnMount={true} title={<p className="text-light">Điện thoại <img className="text-light" src="../phone.png" alt="phone" width={20} height={20}></img></p>} id="collasible-nav-dropdown">
              <NavDropdown.Item className=".dropdown-menu" aria-labelledby="dropdownMenuButton" href="#action/3.1">Iphone</NavDropdown.Item>
              <NavDropdown.Item className=".dropdown-menu" href="#login">Samsung</NavDropdown.Item>
              <NavDropdown.Item className=".dropdown-menu" href="#cart">Redmi</NavDropdown.Item>

            </NavDropdown>
            <NavDropdown marginLeft={30} marginRight={30} href="#productdetail" className="dropdown" renderMenuOnMount={true} title={<p className="text-light">Laptop <img src="../laptop.png" alt="laptop" width={20} height={20}></img></p>} id="collasible-nav-dropdown">
              <NavDropdown.Item className=".dropdown-menu" aria-labelledby="dropdownMenuButton" href="#action/3.1">HP</NavDropdown.Item>
              <NavDropdown.Item className=".dropdown-menu" href="#login">DELL</NavDropdown.Item>
              <NavDropdown.Item className=".dropdown-menu" href="#cart">MSI</NavDropdown.Item>

            </NavDropdown>
            <NavDropdown marginLeft={30} marginRight={30} href="#productdetail" className="dropdown" renderMenuOnMount={true} title={<p className="text-light" >Tablet <img src="../tablet.png" alt="tablet" width={20} height={20}></img></p>} id="collasible-nav-dropdown">
              <NavDropdown.Item className=".dropdown-menu" aria-labelledby="dropdownMenuButton" href="#action/3.1">Samsung</NavDropdown.Item>
              <NavDropdown.Item className=".dropdown-menu" href="#login">Apple</NavDropdown.Item>
              <NavDropdown.Item className=".dropdown-menu" href="#cart">Ipad</NavDropdown.Item>

            </NavDropdown>
            <NavDropdown marginLeft={30} marginRight={30} href="#productdetail" className="dropdown" renderMenuOnMount={true} title={<p className="text-light">Phụ kiện <img src="../accessories.png" alt="accesories" width={20} height={20}></img></p>} id="collasible-nav-dropdown">
              <NavDropdown.Item className=".dropdown-menu" aria-labelledby="dropdownMenuButton" href="#action/3.1">Chuột</NavDropdown.Item>
              <NavDropdown.Item className=".dropdown-menu" href="#login">Tai Nghe</NavDropdown.Item>
              <NavDropdown.Item className=".dropdown-menu" href="#cart">Bàn phím</NavDropdown.Item>

            </NavDropdown>

            <Form style={{ width: 200, height: 20, marginRight: 20 }} className="d-flex input-lg form-inline ml-5 "> <Form.Control type="search" placeholder="Nhập tên sản phẩm" className="me-2" aria-label="Search" /></Form>
            <Button className="bg-danger border-0" onClick={SearchClicked}><img src="../searchButton.png" width={30} height={30} className="ml-2 mr-auto" alt="search" border={0} /></Button>
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
            <NavDropdown marginLeft={20} marginRight={20} className="dropdown text-center text-light" renderMenuOnMount={true} title={<p className="text-light">{userId != -1 ? username : 'Tài khoản'} <img src="../user.png" alt="user" width={16} height={16}></img></p>} id="collasible-nav-dropdown">
              <NavDropdown.Item className=".dropdown-menu" aria-labelledby="dropdownMenuButton" >
                <Link to={'/login'}>Đăng nhập</Link>
              </NavDropdown.Item>
              <NavDropdown.Item >
                <Link to={'/registry'} >Đăng ký</Link>
              </NavDropdown.Item>
            </NavDropdown>
            :
            <NavDropdown marginLeft={20} marginRight={20} className="dropdown text-center text-light" renderMenuOnMount={true} title={<p className="text-light">{userId != -1 ? username : 'Tài khoản'} <img src="../user.png" alt="user" width={16} height={16}></img></p>} id="collasible-nav-dropdown">
              {role == 'ADMIN' ?
                <NavDropdown.Item>
                  <Link to={'/admin/product'}>Admin</Link>
                </NavDropdown.Item>
                :
                null
              }
              <NavDropdown.Item>
                <Link to={'/cart'}>Giỏ hàng</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
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