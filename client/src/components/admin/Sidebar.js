import React from 'react'
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

const Sidebar = () => {
    return ( 
        <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial', backgroundColor: '#013380', color: '#fff', padding: '10px'}} className="sidebar-wrapper">
            <nav id="sidebar">
                <ul className="list-unstyled components">
                    <li style={{ padding: '10px 0'}}>
                        <Link to="/dashboard" style={{ color: '#fff', textDecoration: 'none' }}><i className="fa fa-tachometer"></i> Tổng quan</Link>
                    </li>
                    <li style={{ padding: '10px 0'}}>
                        <Link to="/admin/product" style={{ color: '#fff', textDecoration: 'none' }}><i className="fa fa-product-hunt"></i> Quản lý sản phẩm</Link>
                    </li>
                    <li style={{ padding: '10px 0'}}>
                        <Link to="/admin/orders" style={{ color: '#fff', textDecoration: 'none' }}><i className="fa fa-shopping-basket"></i> Quản lý đơn hàng</Link>
                    </li>
                    <li style={{ padding: '10px 0'}}>
                        <Link to="/admin/user" style={{ color: '#fff', textDecoration: 'none' }}><i className="fa fa-users"></i> Quản lý người dùng</Link>
                    </li>
                    <li style={{ padding: '10px 0'}}>
                        <Link to="/admin/reviews" style={{ color: '#fff', textDecoration: 'none' }}><i className="fa fa-star"></i> Quản lý bình luận</Link>
                    </li>
                    <li style={{ padding: '10px 0'}}>
                        <Link to="/admin/support" style={{ color: '#fff', textDecoration: 'none' }}><i class="bi bi-headset"></i> Hỗ trợ khách hàng</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar
