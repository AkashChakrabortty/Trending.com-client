import React, { useContext, useState } from 'react';
import Divider from '../../components/Divider/Divider';
import { userInfo } from '../../context/AuthProvider';

const About = () => {
    const { user, updateUser } = useContext(userInfo);
    const [reFetch,setReFetch] = useState(true)
    const handleSubmit = (event) => {
      event.preventDefault();
      const email = event.target.email.value;
      const name = event.target.name.value;
      const university = event.target.university.value;
      const address = event.target.address.value;

      updateUser(name);
      const editInfo = {
        previous_email : user.email,
        email,
        name,
        university,
        address,
      };
       fetch("http://localhost:5000/edit", {
         method: "PATCH",
         headers: {
           "content-type": "application/json",
         },
         body: JSON.stringify(editInfo),
       })
         .then((res) => res.json())
         .then((data) => {
            // setReFetch(!reFetch)
            event.target.reset();
        });
    }
    return (
      <div>
        <div className="card w-3/4 lg:w-1/2 bg-base-100 shadow-xl default-bg text-info mx-auto">
          <figure className="px-10 pt-10">
            <img
              src={user?.photoURL}
              alt={user?.displayName}
              className="rounded-xl h-32"
            />
          </figure>
          <div className="card-body items-center">
            <div className="info">
              <p>Name: {user?.displayName}</p>
              <p>Email: {user?.email}</p>
              <p>University: {user?.email}</p>
              <p>Address: {user?.email}</p>
            </div>
          </div>
          <Divider></Divider>
          <div className="form p-2">
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
                  placeholder={user?.displayName}
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
                  placeholder={user?.email}
                  disabled
                />
              </div>
              <div>
                <label
                  htmlFor="university"
                  className="block mb-2 text-sm font-medium text-info dark:text-white"
                >
                  Your university
                </label>
                <input
                  type="text"
                  name="university"
                  id="university"
                  className="default-bg border border-info text-info sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your university"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block mb-2 text-sm font-medium text-info dark:text-white"
                >
                  Your address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="default-bg border border-info text-info sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=" Your address"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full text-info border-2 border-info focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Edit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
};

export default About;