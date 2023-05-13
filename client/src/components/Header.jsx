import React from "react";
import { FaAirbnb, FaUserCircle } from "react-icons/fa";
import { BiSearch, BiGlobe, BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-around p-4 border">
        <Link to="/" className="flex items-center gap-1 text-primary">
          <FaAirbnb className="w-9 h-9" />
          <span className="max-md:hidden md:block text-xl font-bold">
            airbnb
          </span>
        </Link>
        <div className="flex gap-4 items-center border border-gray-300 py-2 px-4 rounded-full divide-x mt-1 text-sm shadow-md">
          <div className="pl-2 font-semibold text-sm">Anywhere</div>
          <div className="pl-4 h-8 pt-1.5 font-semibold text-sm ">Any week</div>
          <div className="flex gap-4 items-center pl-4">
            <span className="font-normal text-gray-500">Add guests</span>
            <BiSearch
              style={{ strokeWidth: 1 }}
              className="bg-primary text-white mt-0.5 w-8 h-8 p-2 rounded-full"
            />
          </div>
        </div>
        <div className="flex justify-between items-center gap-4">
          <div className="font-semibold text-sm">Airbnb your home</div>
          <BiGlobe className="w-5 h-5" />
          <div className="flex justify-between items-center px-3 py-2 border border-gray-200 rounded-full">
            <BiMenu className="h-6 w-6" />
            <FaUserCircle className="ml-3 h-9 w-9" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
