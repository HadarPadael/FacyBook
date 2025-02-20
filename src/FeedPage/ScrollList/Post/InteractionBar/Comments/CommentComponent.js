function CommentComponent({ profilePic, nickname, comment }) {
  return (
    <li className="row">
      <div className="col-2">
        <img id="profilePic" src={profilePic} alt="profilePic" />
      </div>
      <div id="commentCard" className="col-10 text-start card">
        <h6 id="comment-Publisher">{nickname}</h6>
        <text id="commentContent">{comment}</text>
      </div>
    </li>
  );
}

export default CommentComponent;
