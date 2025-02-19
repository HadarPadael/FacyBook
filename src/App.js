import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./loginPage/Login";
import "./App.css";
import { useState } from "react";
import SignUp from "./SignUpPage/SignUp";
import Feed from "./FeedPage/Feed";
import TransitionPage from "./SignUpPage/TransitionPage";

function App() {
  // State to track authentication status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Protected route component
  const ProtectedRoute = ({ element }) => {
    return isLoggedIn ? element : <Navigate to="/" replace />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/SignUp" element={<SignUp />} />
        {/* protrcted routes */}
        <Route
          path="/Feed"
          element={
            <ProtectedRoute element={<Feed setIsLoggedIn={setIsLoggedIn} />} />
          }
        />
        <Route
          path="/Success"
          element={<ProtectedRoute element={<TransitionPage />} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
