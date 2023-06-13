import React, { useContext } from "react";
import { UserContext } from "../utills/context";
import { Navigate } from "react-router-dom";

const Account = () => {
  const { user, ready } = useContext(UserContext);

  if(!ready) return <p className="text-4xl">Loading ...</p>

  if(ready && !user) return <Navigate to="/login" />;

  return <div>Account</div>;
};

export default Account;
