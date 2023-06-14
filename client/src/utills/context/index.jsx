import React, { createContext, useState, useEffect } from "react";
import customAxios from "./../axios/index";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    customAxios
      .get("/profile")
      .then(({ data }) => {
        setUser(data);
      })
      .catch((error) => {
        console.log(error);
        setUser(null);
      })
      .finally(() => {
        setReady(true);
      });
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        ready,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default ContextProvider;
