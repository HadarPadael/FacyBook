import CommentsModal from "./Comments/CommentsModal";

function InteractionComponent({ icon, handleClick, toggle, target, comments }) {
  console.log(comments);
  return (
    <div
      className="col-4 btn btn-light reactionBtn"
      onClick={handleClick}
      type="button"
      data-bs-toggle={toggle}
      data-bs-target={"#" + target}
    >
      <div className={icon} />
      <CommentsModal comments={comments} id={target} />
    </div>
  );
}

export default InteractionComponent;
