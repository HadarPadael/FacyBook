import PostContent from "../../PostContent";

function CommentsModal() {
  return (
    <div
      className="modal fade"
      id="CommentsModal"
      tabindex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header text-center">
            <h1 className="modal-title fs-5">
              Nicknames post
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <PostContent postPic={"/postPic.jpg"} content={"adada"}/>
            {/*commentsList */}
          </div>
          <div className="modal-footer">
            {/*commentsBar */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentsModal;
