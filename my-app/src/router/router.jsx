import { createBrowserRouter, Outlet } from "react-router-dom";
import PrivateRoute from '../../src/PrivateRoute/PrivateRoute';
import DetailsCard from "../components/DetailsCard/DetailsCard";
import Footer from "../components/Footer/Footer";
import Home from "../components/home/Home";
import Nav from "../components/nav/nav";
import About from "../page/About/About";
import Login from '../page/Login/Login';
import Media from '../page/Media/Media';
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
      {
        path: "/media",
        element: <Media></Media>,
      },
      {
        path: "/media/:id",
        loader: async ({ params }) => {
          return fetch(`https://trending-com-server.vercel.app/media/${params.id}`);
        },
        element: (
          <PrivateRoute>
            <DetailsCard></DetailsCard>
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);

export default router;