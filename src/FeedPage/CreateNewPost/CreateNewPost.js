import { useNavigate } from "react-router-dom";
import { useState } from "react";
import HandlePic from "../../SignUpPage/InteractionLogic/HandlePic";
import CreateNewPostList from "./CreatePostList";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext";

function CreateNewPost() {
  const { setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setData] = useState({
    content: "",
  });

  const handleSubmit = (event) => {
    setIsLoggedIn(true);
    navigate("/Feed");
  };
  return (
    <div className="d-flex justify-content-center text-center NewCard">
      <div className="d-flex justify-content-center text-center shadow CreatePContainer">
        <form onSubmit={handleSubmit}>
          <CreateNewPostList formData={formData} setData={setData} />
          <HandlePic id={"PostPreviewPic"} />
          <div className="col-12">
            <button id="sign-up-btn" className="btn btn-success" type="submit">
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateNewPost;
