import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [darkMode, setMode] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, darkMode, setMode, user, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}
