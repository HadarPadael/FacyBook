import CommentsModal from "./Comments/CommentsModal";

function InteractionComponent({
  icon,
  handleClick,
  toggle,
  target,
  comments,
  name,
  content,
  postPic,
}) {
  return (
    <div
      className="col-4 btn btn-light reactionBtn"
      onClick={handleClick}
      type="button"
      data-bs-toggle={toggle}
      data-bs-target={"#" + target}
    >
      <div className={icon} />
      <CommentsModal
        comments={comments}
        id={target}
        name={name}
        content={content}
        postPic={postPic}
      />
    </div>
  );
}

export default InteractionComponent;
