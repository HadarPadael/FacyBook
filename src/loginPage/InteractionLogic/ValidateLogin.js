import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateLogInList from "../CreateLogInList";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext";

function ValidateLogin() {
  const { setIsLoggedIn } = useContext(AuthContext);
  const [formData, setData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Hardcoded username and password for pre-server state
  const hardcodedUsername = "Hadar";
  const hardcodedPassword = "12345678";

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
