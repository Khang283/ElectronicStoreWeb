import React from 'react'
import { Link } from 'react-router-dom'
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from 'cdbreact';
const Sidebar = () => {
    return (
        <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial'}} className="sidebar-wrapper">
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

                </ul>
            </nav>
        </div>
    )
}

export default Sidebar
