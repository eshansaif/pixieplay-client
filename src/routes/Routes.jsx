import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import NotFound from "../NotFound/NotFound";
import Blogs from "../components/Blogs/Blogs";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import AddToy from "../components/AddToy/AddToy";
import PrivateRoutes from "./PrivateRoutes";
import MyToys from "../components/MyToys/MyToys";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "add-toy",
                element: <PrivateRoutes><AddToy></AddToy></PrivateRoutes>
            },
            {
                path: "/my-toys",
                element: <PrivateRoutes><MyToys></MyToys></PrivateRoutes>
            }
        ]
    },
    {
        path: "*",
        element: <NotFound></NotFound>
    }
]);

export default router;