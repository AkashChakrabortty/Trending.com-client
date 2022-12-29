import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import Divider from "../../components/Divider/Divider";
import { userInfo } from "../../context/AuthProvider";
import logo from '../../Divider-logo/divider.jpg';
const Login = () => {
  const { googleSignIn, login } = useContext(userInfo);
  const navigate = useNavigate();
  const handleGoogle = ()=>{

     googleSignIn()
       .then((result) => {
         // The signed-in user info.
         const user = result.user;

         const userdb = {
           email: user.email,
           name: user.displayName,
           photoUrl: user.photoURL,
         };

         fetch("http://localhost:5000/storeUser", {
           method: "POST",
           headers: {
             "content-type": "application/json",
           },
           body: JSON.stringify(userdb),
         })
           .then((res) => res.json())
           .then((data) => { navigate("/");});
       })
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    login(email, password).then(() => {
      navigate("/");
    });
  };
  return (
    <div className="default-bg">
      <section>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link
            to="/login"
            className="flex items-center mb-6 text-2xl font-semibold text-info dark:text-white"
          >
            <img className="w-8 h-8 mr-2" src={logo} alt="Trending.com" />
            Trending.com
          </Link>
          <div className="w-full default-bg text-info rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-info md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-info dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="default-bg border border-info text-info sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-info dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="default-bg border border-info text-info sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-info border-2 border-info focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>

                <Divider></Divider>
                <div className="gmail-login flex justify-center text-4xl">
                  <button onClick={handleGoogle}>
                    <FcGoogle></FcGoogle>
                  </button>
                </div>
                <Divider></Divider>

                <p className="text-sm font-light text-info dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link
                    to="/register"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Register
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
