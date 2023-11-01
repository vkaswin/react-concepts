import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  let [countOne, setCountOne] = useState(0);

  let [countTwo, setCountTwo] = useState(0);

  return (
    <AuthContext.Provider
      value={{ countOne, countTwo, setCountOne, setCountTwo }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useStore = () => {
  return useContext(AuthContext);
};
