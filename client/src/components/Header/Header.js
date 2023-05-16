import React from "react";
import  Container  from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import './Header.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
{/*const UserMenu = (
  <img
    src={'../user.png'}
    alt="UserName profile image"
    roundedCircle
    style={{ width: '40px', height: '40px' }}
  />
) //Test thu hinh anh dai dien */              }
function Header(){
    return(
      
        <Navbar collapseOnSelect bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Electronic Store</Navbar.Brand>
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
    <Nav className="me-auto" style={{marginLeft:20, marginRight:20, marginTop:20}}>
          <NavDropdown marginLeft={20} marginRight={20} href="#productdetail" className="dropdown" renderMenuOnMount={true} title={<p>Điện thoại <img src="../cell-phone.png" alt="phone" width={15} height={15}></img></p>} id="collasible-nav-dropdown">
              <NavDropdown.Item className=".dropdown-menu" aria-labelledby="dropdownMenuButton" href="#action/3.1">Iphone</NavDropdown.Item>
              <NavDropdown.Item className=".dropdown-menu" href="#login">Samsung</NavDropdown.Item>
              <NavDropdown.Item className=".dropdown-menu" href="#cart">Redmi</NavDropdown.Item>
      
            </NavDropdown>
          <NavDropdown marginLeft={20} marginRight={20} href="#productdetail" className="dropdown" renderMenuOnMount={true} title={<p>Laptop <img src="../laptop.png" alt="laptop" width={15} height={15}></img></p>} id="collasible-nav-dropdown">
              <NavDropdown.Item className=".dropdown-menu" aria-labelledby="dropdownMenuButton" href="#action/3.1">HP</NavDropdown.Item>
              <NavDropdown.Item className=".dropdown-menu" href="#login">DELL</NavDropdown.Item>
              <NavDropdown.Item className=".dropdown-menu" href="#cart">MSI</NavDropdown.Item>
            
            </NavDropdown>
          <NavDropdown marginLeft={20} marginRight={20} href="#productdetail" className="dropdown" renderMenuOnMount={true} title={<p>Tablet <img src="../tablet.png" alt="tablet" width={15} height={15}></img></p>} id="collasible-nav-dropdown">
              <NavDropdown.Item className=".dropdown-menu" aria-labelledby="dropdownMenuButton" href="#action/3.1">Samsung</NavDropdown.Item>
              <NavDropdown.Item className=".dropdown-menu" href="#login">Apple</NavDropdown.Item>
              <NavDropdown.Item className=".dropdown-menu" href="#cart">Ipad</NavDropdown.Item>
            
            </NavDropdown>
          <NavDropdown marginLeft={20} marginRight={20} href="#productdetail" className="dropdown" renderMenuOnMount={true} title={<p>Phụ kiện <img src="../adapter.png" alt="accesories" width={15} height={15}></img></p>} id="collasible-nav-dropdown">
              <NavDropdown.Item className=".dropdown-menu" aria-labelledby="dropdownMenuButton" href="#action/3.1">Chuột</NavDropdown.Item>
              <NavDropdown.Item className=".dropdown-menu" href="#login">Tai Nghe</NavDropdown.Item>
              <NavDropdown.Item className=".dropdown-menu" href="#cart">Bàn phím</NavDropdown.Item>
             
            </NavDropdown>
          <Form style = {{width:400, height:40, marginLeft:20, marginRight:20}} className = "d-flex input-lg form-inline"> <Form.Control type="search" placeholder="Nhập tên sản phẩm mà bạn muốn tìm..." className = "me-2" aria-label="Search"/></Form>
           <img src="../searchButton.png" width={40} height={40} bg="white" alt="search" border={0}/>
           <Nav>
          <NavDropdown  marginLeft={20} marginRight={20} href="#account" className="dropdown position-absolute top-60 end-5" renderMenuOnMount={true} title="Tài khoản" id="collasible-nav-dropdown">
              <NavDropdown.Item className=".dropdown-menu" aria-labelledby="dropdownMenuButton" href="#action/3.1">Đăng kí</NavDropdown.Item>
              <NavDropdown.Item href="#login">Đăng nhập</NavDropdown.Item>
              <NavDropdown.Item href="#cart">Giỏ hàng</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#logout">
                Đăng xuất
              </NavDropdown.Item>
            </NavDropdown>
            </Nav>
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
         
          
   
        </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;