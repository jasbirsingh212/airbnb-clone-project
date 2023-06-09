import React, {useState} from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChanges = (type, e) => {
    const {value} = e?.target;

    switch (type) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;

      default:
        break;
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    

  }

  return (
    <div className="flex flex-col items-center justify-center mt-12">
      <div className="border border-gray-300 p-6 w-2/6 rounded-xl shadow-lg">
        <h1 className="text-4xl mb-6 text-center text-primary">Register</h1>
        <form autoComplete="off" onSubmit={handleFormSubmit}>
          <div className="flex flex-col mb-5">
            <label className="mb-1">Enter Your Name :</label>
            <input
              className="border border-gray-300 p-2 rounded-full focus:border-primary focus:outline-none focus:shadow-input"
              type="text"
              value={name}
              placeholder="eg: Johnson"
              onChange={(e) => handleInputChanges("name", e)}
            />
          </div>
          <div className="flex flex-col mb-5">
            <label className="mb-1">Enter Your Email :</label>
            <input
              className="border border-gray-300 p-2 rounded-full focus:outline-none focus:shadow-input focus:border-primary"
              type="email"
              value={email}
              placeholder="eg: youremail@gmail.com"
              onChange={(e) => handleInputChanges("email", e)}
            />
          </div>
          <div className="flex flex-col mb-5">
            <label className="mb-1">Enter Your Password:</label>
            <input
              className="border border-gray-300 p-2 rounded-full focus:outline-none focus:shadow-input focus:border-primary"
              type="password"
              value={password}
              placeholder="eg: yourname@123#"
              onChange={(e) => handleInputChanges("password", e)}
            />
          </div>
          <button className="bg-primary text-white p-3 rounded-full w-full mt-1">
            Register
          </button>
          <div className="flex justify-center gap-1 mt-2">
            <p className="">Already have an account with us ? </p>
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
