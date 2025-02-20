import PostContent from "../../PostContent";
import CommentBar from "./CommentBar";
import CommentsList from "./CommentsList";

function CommentsModal({ comments, id }) {
  return (
    <div className="modal fade" id={id} tabindex="-1" aria-hidden="true">
      <div className="modal-dialog custom-scrollbar">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <h1 className="modal-title fs-5">Nicknames post</h1>
          </div>
          <div className="modal-body">
            <PostContent postPic={"/postPic.jpg"} content={"Post content"} />
            <hr></hr>
            <div id="commentsSection" className="custom-scrollbar">
              <CommentsList comments={comments} />
            </div>
          </div>
          <div className="modal-footer text-start">
            <CommentBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentsModal;
