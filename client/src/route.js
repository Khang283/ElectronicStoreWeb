import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./components/Error/Error";
import Login from "./components/Login/Login";
import Register from './components/Register/Register';
import Cart from './components/Cart/Cart.js'
import Home from './components/Home/Home.js'
import Details from "./components/Details/Details";


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
                path: '/login',
                element: <Login />
            },
            {
                path: '/registry',
                element: <Register />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/:id/',
                element: <Details/>
                // element: (props) => <Details {...props}/>
                // render: (props) =>
                //     <Details {...props} />
            }
        ]
    }
]);

export default router;