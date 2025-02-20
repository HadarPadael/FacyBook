import CommentsModal from "./Comments/CommentsModal";

function InteractionComponent({ icon, handleClick, toggle, target }) {
  return (
    <div
      className="col-4 btn btn-light reactionBtn"
      onClick={handleClick}
      type="button"
      data-bs-toggle={toggle}
      data-bs-target={target}
    >
      <div className={icon} />
      <CommentsModal />
    </div>
  );
}

export default InteractionComponent;
