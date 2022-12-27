import { createBrowserRouter, Outlet } from "react-router-dom";
import DetailsCard from "../components/DetailsCard/DetailsCard";
import Footer from "../components/Footer/Footer";
import Home from "../components/home/Home";
import Nav from "../components/nav/nav";
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
      {
        path: "/media",
        element: <Media></Media>,
      },
      {
        path: "/media/:id",
        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/media/${params.id}`);
        },
        element: <DetailsCard></DetailsCard>,
      },
    ],
  },
]);

export default router;