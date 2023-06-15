import React, { useContext, useState } from "react";
import { UserContext } from "../utills/context";
import { Navigate, Link } from "react-router-dom";
import Profile from "../components/Profile";

const Account = () => {
  const { user, ready } = useContext(UserContext);
  const [active, setActive] = useState(0);

  if (!ready) return <p className="text-4xl">Loading ...</p>;

  if (ready && !user) return <Navigate to="/login" />;

  const handleClick = (e, index) => {
    setActive(index)
  }

  return (
    <div className="flex flex-col items-center mt-4">
      <div className="flex gap-8 w-1/3">
        <button
          onClick={(e) => handleClick(e, 0)}
          className={`px-4 py-3 rounded-full border border-gray-300 ${
            active === 0 && "active"
          }`}
        >
          My Account
        </button>
        <button
          onClick={(e) => handleClick(e, 1)}
          className={`px-4 py-3 rounded-full border border-gray-300 ${
            active === 1 && "active"
          }`}
        >
          My Booking
        </button>
        <button
          onClick={(e) => handleClick(e, 2)}
          className={`px-4 py-3 rounded-full border border-gray-300 ${
            active === 2 && "active"
          }`}
        >
          My Accommodations
        </button>
      </div>
      <div className="mt-12">
        {active === 0 && <div><Profile /></div>}
        {active === 1 && <div>my booking</div>}
        {active === 2 && <div>my Accommodations</div>}
      </div>
    </div>
  );
};

export default Account;
