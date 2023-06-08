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
import CartHome from "./components/Cart/CartHome.js";
import MyAccount from "./components/MyAccount/MyAccount";
import UpdateUser from "./components/admin/UpdateUser";
import Category from "./components/Category/Category";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorPage />,
        children: [
            {
                path : '/',
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
                path: '/cart/checkout',
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
                element: <Category />,
            },
            {
                path: '/:category/:id',
                element: <Details/>
            },
            {
                path: '/account',
                element: <Account />
            },
            {
                path: '/admin/user/:userid',
                element: <UpdateUser />
            }

        ]
    }
]);

export default router;