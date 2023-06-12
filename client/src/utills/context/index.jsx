import React, { createContext, useState, useEffect } from "react";
import customAxios from "./../axios/index";

export const UserContext = createContext({

})


const ContextProvider = ({children}) => {
  const [user, setUser] = useState();

  useEffect(() => {
    
    const ApiCall = async () => {
      const {data} = await customAxios.get('/profile');
      setUser(data)
    }


    if(!user)
    ApiCall();
    
  }, [])
  

  return (
    <UserContext.Provider value={{
        user,
        setUser
    }}>
    {children}
    </UserContext.Provider>
  )
}

export default ContextProvider