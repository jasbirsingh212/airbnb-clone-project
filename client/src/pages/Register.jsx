import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-12">
      <div className="border border-gray-300 p-6 w-2/6 rounded-xl shadow-lg">
        <h1 className="text-4xl mb-6 text-center text-primary">Register</h1>
        <form autoComplete="off">
          <div className="flex flex-col mb-5">
            <label className="mb-1">Enter Your Name :</label>
            <input
              className="border border-gray-300 p-2 rounded-full focus:border-primary focus:outline-none focus:shadow-input"
              type="text"
              placeholder="eg: Johnson"
            />
          </div>
          <div className="flex flex-col mb-5">
            <label className="mb-1">Enter Your Email :</label>
            <input
              className="border border-gray-300 p-2 rounded-full focus:outline-none focus:shadow-input focus:border-primary"
              type="email"
              placeholder="eg: youremail@gmail.com"
            />
          </div>
          <div className="flex flex-col mb-5">
            <label className="mb-1">Enter Your Password:</label>
            <input
              className="border border-gray-300 p-2 rounded-full focus:outline-none focus:shadow-input focus:border-primary"
              type="password"
              placeholder="eg: yourname@123#"
            />
          </div>
          <button className="bg-primary text-white p-3 rounded-full w-full mt-1">
            Register
          </button>
          <div className="flex justify-center gap-1 mt-2">
            <p className="">Have an account with us ? </p>
            <Link
              className="text-primary hover:text-blue-600 active:text-blue-800"
              to="/login"
            >
              {" "}
              Login now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
