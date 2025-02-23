import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateLogInList from "../CreateLogInList";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext";
import userAPI from "../../API/userAPI";

function ValidateLogin() {
  const { setIsLoggedIn, setUser } = useContext(AuthContext);
  const [formData, setData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await userAPI.userLogin(formData);
      if (user.password === formData.password) {
        setIsLoggedIn(true);
        setUser(user);
        navigate("/Feed");
      } else {
        setError("Incorrect username and/or password");
      }
    } catch (err) {
      console.error(err);
      setError(String(err));
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
