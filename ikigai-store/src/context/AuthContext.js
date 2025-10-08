// src/context/AuthContext.js
import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    // You can replace this with real backend logic later
    if (username && password) {
      setUser({ username });
    }
  };

  const logout = () => setUser(null);

  const register = (username, password) => {
    // Mock register logic
    console.log("User registered:", username);
    setUser({ username });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
