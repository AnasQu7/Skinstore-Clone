import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

export const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log("auth usseer",user)
  const login = (user) => {
      localStorage.setItem("user",user.token)
      setUser(user);
    };
    const getUser = () =>{
      return (localStorage.getItem('user'))
    }
    const logout = () => {
      setUser(null);
      localStorage.setItem("user","")
  };
  return (
    <AuthContext.Provider value={{ user, login, logout ,getUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
