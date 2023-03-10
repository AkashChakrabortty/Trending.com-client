import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userInfo } from "../../context/AuthProvider";
import logo from "../../Divider-logo/divider.jpg";
const Register = () => {
  const { createUser, updateUser } = useContext(userInfo);
  const navigate = useNavigate();
  let photoUrl;
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;
    const img = event.target.photo.files[0];
    const imgbb_key = process.env.REACT_APP_imgbb_key;

    const formData = new FormData();
    formData.append("image", img);

    const url = `https://api.imgbb.com/1/upload?key=${imgbb_key}`;

     fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        photoUrl = data.data.display_url;
      })
      .then(() => {
        createUser(email, password).then((userCredential) => {
          updateUser(name, photoUrl);

          const user = {
            name: name,
            email: email,
            password: password,
            photoUrl: photoUrl,
          };
          fetch("https://trending-com-server.vercel.app/storeUser", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          })
            .then((res) => res.json())
            .then((data) => navigate("/"));
        });
      });

  };

  return (
    <div className="default-bg">
      <section>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link
            to="/register"
            className="flex items-center mb-6 text-2xl font-semibold text-info dark:text-white"
          >
            <img className="w-8 h-8 mr-2" src={logo} alt="Trending.com" />
            Trending.com
          </Link>
          <div className="w-full default-bg text-info rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-info md:text-2xl dark:text-white">
                Create your new account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-info dark:text-white"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="default-bg border border-info text-info sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Your Name"
                    required
                  />
                </div>
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
                    required
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
                    placeholder="????????????????????????"
                    className="default-bg border border-info text-info sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="photo"
                    className="block mb-2 text-sm font-medium text-info dark:text-white"
                  >
                    Upload your photo
                  </label>
                  <input
                    type="file"
                    name="photo"
                    className="file-input file-input-bordered file-input-info default-bg text-info w-full"
                    accept=".jpg"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-info border-2 border-info focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Register
                </button>
                <p className="text-sm font-light text-info dark:text-gray-400">
                  Allready have an account?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login
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

export default Register;
