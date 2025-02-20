import InteractionsList from "./InteractionBar/InteractionsList";
import PostContent from "./PostContent";
import Userdetails from "./UserDetails";

function PostComponent({
  name,
  time,
  profilePic,
  content,
  postPic,
  comments,
  postID,
}) {
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
          <InteractionsList
            comments={comments}
            postID={postID}
            content={content}
            name={name}
            postPic={postPic}
          />
        </div>
      </div>
    </li>
  );
}

export default PostComponent;
