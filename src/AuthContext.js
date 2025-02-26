import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [darkMode, setMode] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [posts, setPosts] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        darkMode,
        setMode,
        user,
        setUser,
        token,
        setToken,
        posts,
        setPosts,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
