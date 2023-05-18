import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import NotFound from "../NotFound/NotFound";
import Blogs from "../components/Blogs/Blogs";
import Login from "../components/Login/Login";


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
            }
        ]
    },
    {
        path: "*",
        element: <NotFound></NotFound>
    }
]);

export default router;