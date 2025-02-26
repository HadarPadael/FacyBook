import { useNavigate } from "react-router-dom";
import { useState } from "react";
import HandlePic from "../../SignUpPage/InteractionLogic/HandlePic";
import CreateNewPostList from "./CreatePostList";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext";
import userAPI from "../../API/userAPI";

function CreateNewPost() {
  const { setIsLoggedIn, token, setPosts, posts, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setData] = useState({
    content: "",
    compressedPic: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const post = await userAPI.createPost(user.nickname, token, formData)
    posts.push(post);
    setPosts(posts);
    setIsLoggedIn(true);
    navigate("/Feed");
  };
  return (
    <div className="d-flex justify-content-center text-center NewCard">
      <div className="d-flex justify-content-center text-center shadow CreatePContainer">
        <form onSubmit={handleSubmit}>
          <CreateNewPostList formData={formData} setData={setData} />
          <HandlePic id={"PostPreviewPic"} setData={setData} />
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
