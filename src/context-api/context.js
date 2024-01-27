import { createContext, useContext, useState } from "react";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [user, setUser] = useState("John");
  const [count, setCount] = useState(0);

  const value = {
    user,
    count,
    setCount,
    setUser,
  };
  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

export const useStateContextApi = () => {
  return useContext(StateContext);
};
