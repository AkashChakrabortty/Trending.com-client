import { createBrowserRouter, Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Home from "../components/home/Home";
import Nav from "../components/nav/nav";
import Login from '../page/Login/Login';
import Register from "../page/Register/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Nav />
        <Outlet></Outlet>
        <Footer></Footer>
      </>
    ),
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;