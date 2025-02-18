import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./loginPage/Login";
import "./App.css";
import { useState } from "react";
import SignUp from "./SignUpPage/SignUp";
import Feed from "./FeedPage/Feed";

function App() {
  // State to track authentication status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Protected route component
  const ProtectedRoute = ({ element, ...rest }) => {
    return isLoggedIn ? element : <Navigate to="/" replace />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/SignUp" element={<SignUp />} />
        {/* protrcted route */}
        <Route
          path="/Feed"
          element={
            <ProtectedRoute element={<Feed setIsLoggedIn={setIsLoggedIn} />} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
