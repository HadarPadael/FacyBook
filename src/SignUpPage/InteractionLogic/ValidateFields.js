import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateSignUpList from "../CreateSignUpList";
import HandlePic from "./HandlePic";
import userAPI from "../../API/userAPI";

function ValidateFields() {
  const [formData, setData] = useState({
    username: "",
    nickname: "",
    password: "",
    validPassword: "",
    compressedPic: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.password !== formData.validPassword) {
      setError("passwords don't match!");
    } else if (formData.password.length < 8) {
      setError("passwords must be at least 8 characters long!");
    } else {
      try {
        const newUser = await userAPI.createUser({ formData });
        console.log("User created:", newUser);
        navigate("/Success");
      } catch (err) {
        console.error(err);
        setError(String(err));
      }
    }
  };

  return (
    <div>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <CreateSignUpList formData={formData} setData={setData} />
        <HandlePic id="RegPreviewPic" setData={setData} />
        <div className="col-12">
          <button id="sign-up-btn" className="btn btn-success" type="submit">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}

export default ValidateFields;
