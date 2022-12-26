import { createBrowserRouter, Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Home from "../components/home/Home";
import Nav from "../components/nav/nav";
import Login from '../page/Login/Login';
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
    ],
  },
]);

export default router;