import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../Layout/Home";
import CategoryNews from "../Pages/CategoryNews";
import AuthLayout from "../Layout/AuthLayout";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Newsdetails from "../Pages/Newsdetails";
import Privateroute from "../PrivateRoute/Privateroute";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "",
                element: <Navigate to={"/category/01"} ></Navigate>
            },
            {
                path: "category/:id",
                element: <CategoryNews />,
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
        path: "/news/:id",
        element: <Privateroute>
            <Newsdetails />
        </Privateroute>,
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
        
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'register',
                element: <Register />
            }
        ]
    },
    {
        path: "*",
        element: <h1>ERROR</h1>
    }
])

export default routes;