import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./components/Error/Error";
import Login from "./components/Login/Login";
import Register from './components/Register/Register';
import Cart from './components/Cart/Cart.js'
import Home from './components/Home/Home.js'
import Checkout from "./components/Checkout/Checkout.js";
import ProductsList from "./components/admin/ProductsList";
import Details from "./components/Details/Details";
import Account from "./components/Account/Account";
import UsersList from "./components/admin/UsersList";
import UpdateUser from "./components/admin/UpdateUser";
import Category from "./components/Category/Category";
import SupportAdmin from "./components/SupportChatAdmin";
import SearchPage from "./components/SearchPage/SearchPage";
import ProductAdd from "./components/admin/ProductAdd";
import ConfirmPayment from "./components/Checkout/ConfirmPayment";
import OrderList from "./components/admin/OrderList";
import UpdateProduct from "./components/admin/UpdateProduct";
import OrderDetails from "./components/Order/OrderDetail";
import OrderDetailAdmin from "./components/admin/OrderDetailAdmin";
import { VNPayCheckout } from "./components/VNPay/VNPayCheckout.js";
import { VnPayReturn } from "./components/VnPayReturn/VnPayReturn.js";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/registry',
                element: <Register />
            },
            {
                path: '/cart',
                element: <Cart />,
            },
            {
                path: '/cart/checkout/stripe',
                element: <Checkout />
            },
            {
                path: '/admin/product',
                element: <ProductsList />
            },
            {
                path: '/admin/user',
                element: <UsersList />
            },
            {
                path: '/:category',
                element: <Category />
            },
            {
                path: '/:category/:company',
                element: <Category />,
            },
            {
                path: '/:category/:company/:id',
                element: <Details />
            },
            {
                path: '/account',
                element: <Account />
            },
            {
                path: '/admin/user/:userid',
                element: <UpdateUser />
            },
            {
                path: '/admin/support',
                element: <SupportAdmin />
            },
            {
                path: '/search/:keyword',
                element: <SearchPage />
            },
            {
                path: '/admin/product/new',
                element: <ProductAdd />
            },
            {
                path: '/cart/checkout/confirmpayment/:orderid',
                element: <ConfirmPayment />
            },
            {
                path: '/admin',
                element: <UsersList />
            },
            {
                path: '/admin/orders',
                element: <OrderList />
            },
            {
                path: 'admin/product/modify/:productid',
                element: <UpdateProduct />
            },
            {
                path: '/admin/orders/:orderid',
                element: <OrderDetailAdmin />
            },
            {
                path: '/cart/checkout/vnpay',
                element: <VNPayCheckout />,
            },
            {
                path: 'cart/checkout/vnpay/vnpay-return',
                element: <VnPayReturn />
            }

        ]
    }
]);

export default router;