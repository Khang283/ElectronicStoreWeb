import React from 'react'
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import {
    CDBSidebar,
    CDBSidebarHeader,
    CDBSidebarMenuItem,
    CDBSidebarContent,
    CDBSidebarMenu,
    CDBSidebarSubMenu,
    CDBSidebarFooter,
    CDBBadge,
    CDBContainer,
    CDBSidebarCTA,
  } from 'cdbreact';
const Sidebar = () => {
    return ( 
        <div style={{ display: 'flex', textColor:"#fff" , height: '100vh', overflow: 'scroll initial'}} className="sidebar-wrapper">
            <nav id="sidebar" textColor="#fff" backgroundColor="#333">
                <ul className="list-unstyled components">
                    <li>
                        <Link to="/dashboard"><i className="fa fa-tachometer"></i> Tổng quan</Link>
                    </li>
                    <li>
                        <Link to="/admin/product"><i
                            className="fa fa-product-hunt"></i> Quản lý sản phẩm</Link>
                    </li>

                    <li>
                        <Link to="/admin/orders"><i className="fa fa-shopping-basket"></i> Quản lý đơn hàng</Link>
                    </li>

                    <li>
                        <Link to="/admin/user"><i className="fa fa-users"></i> Quản lý người dùng</Link>
                    </li>

                    <li>
                        <Link to="/admin/reviews"><i className="fa fa-star"></i> Quản lý bình luận</Link>
                    </li>

                    <li>
                        <Link to="/admin/support"><i class="bi bi-headset"></i> Hỗ trợ khách hàng</Link>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default Sidebar