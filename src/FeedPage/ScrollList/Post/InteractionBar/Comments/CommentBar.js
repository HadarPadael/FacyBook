function CommentBar() {
  return (
    <form className="row">
      <div className="col-2">
        <img
          className="add-comment-pic"
          id="profilePic"
          src="/profilePic.jpg"
        />
      </div>
      <div className="col-10">
        <div className="input-group">
            {/*once a server connection is made, implemet comment addition */}
          <input
            className="form-control add-comment"
            type="text"
            placeholder="Write a comment..."
            aria-label="Comment"
          />
          <button id="commentBTN" className="btn" type="button">
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </form>
  );
}

export default CommentBar;
