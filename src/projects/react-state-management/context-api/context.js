import { createContext, useContext, useState } from "react";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [name, setName] = useState("John");
  const [count, setCount] = useState(0);

  const value = {
    name,
    count,
    setCount,
    setName,
  };
  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

export const useStateContextApi = () => {
  return useContext(StateContext);
};
// export const useStateContextApi = () => {
//   return {
//     name: "Alex",
//     count: 0,
//     setCount() {},
//   };
// };
