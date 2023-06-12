import React, { useState } from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ children, data = [], user = null }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = () => {
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
        <div className={`absolute mt-2 py-2 w-[16rem] ${user ? "-left-32" : "-left-40"}  top-12 text-sm bg-white border border-gray-300 rounded-md shadow-md z-10`}>
          {data?.length > 0 &&
            data.map(({ id, link, path, className }) => (
              <Link
                key={id}
                to={path}
                onClick={() => handleOptionSelect({ link, path })}
                className={`block px-4 py-2 text-gray-800 hover:bg-gray-200 focus:bg-gray-200 w-full text-left ${className}`}
              >
                {link === "Log Out" ? `${link}   ${user?.email}` : link}
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
