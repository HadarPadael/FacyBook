import { useNavigate } from "react-router-dom";

function ToSignUp() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/SignUp");
  };

  return (
    <form onSubmit={handleSubmit}>
      <button id="sign-up-btn" className="btn btn-success" type="submit">
        Create a new account
      </button>
    </form>
  );
}

export default ToSignUp;
