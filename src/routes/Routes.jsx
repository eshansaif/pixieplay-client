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
import AllToys from "../components/AllToys/AllToys";
import ViewDetails from "../components/ViewDetails/ViewDetails";
import UpdateToy from "../components/UpdateToy/UpdateToy";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/add-toy",
        element: (
          <PrivateRoutes>
            <AddToy></AddToy>
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-toys",
        element: (
          <PrivateRoutes>
            <MyToys></MyToys>
          </PrivateRoutes>
        ),
      },
      {
        path: "/update-toy/:id",
        element: (
          <PrivateRoutes>
            <UpdateToy></UpdateToy>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://pixieplay-server-djy8.vercel.app/toy/${params.id}`),
      },
      {
        path: "/all-toys",
        element: <AllToys></AllToys>,
        loader: () => fetch("https://pixieplay-server-djy8.vercel.app/toys"),
      },
      {
        path: "/toy/:id",
        element: (
          <PrivateRoutes>
            <ViewDetails></ViewDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://pixieplay-server-djy8.vercel.app/toy/${params.id}`),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

export default router;
