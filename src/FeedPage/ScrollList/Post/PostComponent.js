import MenuComponent from "../../Navbar/MenuComponent";
import InteractionsList from "./InteractionBar/InteractionsList";
import PostContent from "./PostContent";
import Userdetails from "./UserDetails";

function PostComponent({ name, time, profilePic, content, postPic }) {
  return (
    <li id="postContainer" className="card shadow-lg">
      <div className="vstack gap-3">
        <div className="p-1">
          <Userdetails name={name} time={time} profilePic={profilePic} />
        </div>
        <div id="postContent" className="p-1">
          <PostContent content={content} postPic={postPic} />
        </div>
        <hr></hr>
        <div className="p-0">
          <div id="interactionRow" className="row">
            {InteractionsList}
            <div className="col-4 btn btn-light reactionBtn share">
              <MenuComponent
                icon="bi bi-share"
                option1={"Whatsapp"}
                option2={"Email"}
                option3={"Message"}
              />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default PostComponent;
