import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './loginPage/Login';
import "./App.css"
import SignUp from "./SignUpPage/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
