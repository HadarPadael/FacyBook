import InteractionsList from "./InteractionBar/InteractionsList";
import PostContent from "./PostContent";
import Userdetails from "./UserDetails";

function PostComponent() {
  return (
    <div id="postContainer" className="card shadow-lg">
      <div className="vstack gap-3">
        <div className="p-1">
          <Userdetails />
        </div>
        <div id="postContent" className="p-1">
          <PostContent />
        </div>
        <hr></hr>
        <div className="p-0">
          <div className="row">{InteractionsList}</div>
        </div>
      </div>
    </div>
  );
}

export default PostComponent;
