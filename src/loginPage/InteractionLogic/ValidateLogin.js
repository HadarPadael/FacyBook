import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateLogInList from "../CreateLogInList";

function ValidateLogin({ setIsLoggedIn }) {
  const [formData, setData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Hardcoded username and password for pre-server state
  const hardcodedUsername = "user";
  const hardcodedPassword = "password";

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      hardcodedPassword === formData.password &&
      hardcodedUsername === formData.username
    ) {
      setIsLoggedIn(true);
      navigate("/Feed");
    } else {
      setError("Incorrect username or password");
    }
  };

  return (
    <div>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <CreateLogInList formData={formData} setData={setData} />
        <button id="LogInBtn" className="btn btn-primary" type="submit">
          Log in
        </button>
      </form>
    </div>
  );
}

export default ValidateLogin;
