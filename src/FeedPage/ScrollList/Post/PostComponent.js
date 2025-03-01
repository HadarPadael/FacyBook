import InteractionsList from "./InteractionBar/InteractionsList";
import PostContent from "./PostContent";
import Userdetails from "./UserDetails";

function PostComponent({
  nickname,
  time,
  profilePic,
  content,
  postPic,
  comments,
  postID,
  likes,
}) {
  return (
    <li id="postContainer" className="card shadow-lg">
      <div className="vstack">
        <div className="p-1">
          <Userdetails
            name={nickname}
            time={time}
            profilePic={profilePic}
            postID={postID}
          />
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
            name={nickname}
            postPic={postPic}
            likes={likes}
          />
        </div>
      </div>
    </li>
  );
}

export default PostComponent;
