import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateSignUpList from "../CreateSignUpList";

function ValidateFields() {
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [username, setUsername] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== validPassword) {
      setError("passwords don't match!");
    } else if (password.length < 8) {
      setError("passwords must be at least 8 characters!");
    } else {
      navigate("/");
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  return (
    <div>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <CreateSignUpList
          setPassword={setPassword}
          setValidPassword={setValidPassword}
          setNickname={setNickname}
          setUsername={setUsername}
        />
        <div className="mb-3">
          <label id="InstructionLabel">please choose a profile picture</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="form-control"
            aria-label="file example"
            required
          />
        </div>
        <div className="col-12">
          {image && (
            <div>
              <img
                id="previewPic"
                src={URL.createObjectURL(image)}
                alt="Preview"
              />
            </div>
          )}
        </div>
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
