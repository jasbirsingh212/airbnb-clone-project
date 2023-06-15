import React, { useContext } from "react";
import { UserContext } from "../utills/context";

const Profile = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <div className="text-center">
        Logged In as{" "}
        <span className="ml-2 font-semibold text-lg ">{user?.name}</span>{" "}
        <span className="ml-2 font-semibold text-lg text-primary">({user?.email})</span>
      </div>
    </div>
  );
};

export default Profile;
