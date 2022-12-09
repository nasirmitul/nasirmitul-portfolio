import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Authentication/Login";
import Dashboard from "../components/Dashboard/Dashboard";
import ErrorPage from "../components/Error/ErrorPage";
import Home from "../components/Home/Home";
import Main from "../layouts/Main"

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
    }
])