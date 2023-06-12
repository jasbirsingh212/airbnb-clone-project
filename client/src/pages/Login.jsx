import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import customAxios from "./../utills/axios";
import Alert from "../components/Alert";
import { UserContext } from "../utills/context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [alertType, setAlertType] = useState("");
  const navigate = useNavigate();
  const {setUser} = useContext(UserContext);

  const handleInputChanges = (type, e) => {
    const { value } = e?.target;

    switch (type) {
      case "email":
        setEmail(value);
        break;
      default:
        setPassword(value);
        break;
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const {data} = await customAxios.post("/login", {
        email,
        password,
      });

      if(data?.name){
        setMessage("User Logged In Successful. Redirecting to home page!");
        setAlertType("green")
        setUser(data)
        setTimeout(() => {
          navigate("/");
        }, 1500);
      }

    } catch (error) {
      console.log(error);
      setMessage(error?.response?.data);
      setAlertType("red");
    }
  };

  return (
    <>
      {message && <Alert message={message} type={alertType} />}
      <div className="flex flex-col items-center justify-center mt-20">
        <div className="border border-gray-300 p-6 w-2/6 rounded-xl shadow-lg">
          <h1 className="text-4xl mb-6 text-center text-primary">Login</h1>
          <form autoComplete="off" onSubmit={handleLogin}>
            <div className="flex flex-col mb-5">
              <label className="mb-1">Enter Your Email :</label>
              <input
                className="border border-gray-300 p-2 rounded-full focus:border-primary focus:outline-none focus:shadow-input"
                type="email"
                value={email}
                onChange={(e) => handleInputChanges("email", e)}
                placeholder="eg: youremail@gmail.com"
              />
            </div>
            <div className="flex flex-col mb-5">
              <label className="mb-1">Enter Your Password:</label>
              <input
                className="border border-gray-300 p-2 rounded-full focus:border-primary focus:outline-none focus:shadow-input"
                type="password"
                value={password}
                onChange={(e) => handleInputChanges("password", e)}
                placeholder="eg: yourname@123#"
              />
            </div>
            <button className="bg-primary text-white p-3 rounded-full w-full mt-1">
              Login
            </button>
            <div className="flex justify-center gap-1 mt-2">
              <p className="">Don't have an account ? </p>
              <Link
                className="text-primary hover:text-blue-600 active:text-blue-800"
                to="/register"
              >
                {" "}
                Register now
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
