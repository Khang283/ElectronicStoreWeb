import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./components/Error/Error";
import Login from "./components/Login/Login";
import Register from './components/Register/Register';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/registry',
                element: <Register />
            }
        ]
    }
]);

export default router;