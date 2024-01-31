import { createContext, useState } from "react";

export const userContext = createContext();

const UseUser = ({ children }) => {
  const [userS, setUserS] = useState(null);
  const valores = { userS, setUserS };
  return (
    <userContext.Provider value={valores}>{children}</userContext.Provider>
  );
};

export default UseUser;
