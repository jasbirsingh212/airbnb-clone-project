import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../utills/context";
import customAxios from "./../utills/axios";

const Dropdown = ({ children, data = [], user = null }) => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLoggout = async () => {
    try {
      await customAxios.post("/logout");
      setUser(null);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleOptionSelect = async ({ link, path }) => {
    switch (link) {
      case "Log Out":
        await handleLoggout();
        break;

      default:
        break;
    }

    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={handleToggle}
        className="rounded-md text-gray-800 focus:outline-none"
      >
        {children}
      </button>
      {isOpen && (
        <div
          className={`absolute mt-2 py-2 w-[16rem] ${
            user ? "-left-32" : "-left-40"
          }  top-12 text-sm bg-white border border-gray-300 rounded-md shadow-md z-10`}
        >
          {data?.length > 0 &&
            data.map(({ id, link, path, className }) => (
              <Link
                key={id}
                to={path}
                onClick={() => handleOptionSelect({ link, path })}
                className={`block px-4 py-2 text-gray-800 hover:bg-gray-200 focus:bg-gray-200 w-full text-left ${className}`}
              >
                {link === "My Account" ? `${link}   ${user?.email}` : link}
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
