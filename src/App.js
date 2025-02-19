import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./loginPage/Login";
import "./App.css";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";
import SignUp from "./SignUpPage/SignUp";
import Feed from "./FeedPage/Feed";
import TransitionPage from "./SignUpPage/TransitionPage";

function App() {
  // State to track authentication status
  const { isLoggedIn } = useContext(AuthContext);

  // Protected route component
  const ProtectedRoute = ({ element }) => {
    return isLoggedIn ? element : <Navigate to="/" replace />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        
        {/* protrcted routes */}
        <Route path="/Feed" element={<ProtectedRoute element={<Feed />} />} />
        <Route
          path="/Success"
          element={<ProtectedRoute element={<TransitionPage />} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
