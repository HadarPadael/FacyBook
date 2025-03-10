import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./loginPage/Login";
import "./App.css";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";
import SignUp from "./SignUpPage/SignUp";
import Feed from "./FeedPage/Feed";
import TransitionPage from "./SignUpPage/TransitionPage";
import CreateNewPost from "./FeedPage/CreateNewPost/CreateNewPost";
import UserPage from "./FeedPage/ScrollList/UserPage/UserPage";

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
        <Route path="/Success" element={<TransitionPage />} />

        {/* protrcted routes */}
        <Route
          path="/UserPage"
          element={<ProtectedRoute element={<UserPage />} />}
        />
        <Route path="/Feed" element={<ProtectedRoute element={<Feed />} />} />
        <Route
          path="/CreateNewPost"
          element={<ProtectedRoute element={<CreateNewPost />} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
