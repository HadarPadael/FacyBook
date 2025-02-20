function InteractionComponent({ icon, handleClick }) {
  return (
    <div className="col-4 btn btn-light reactionBtn" onClick={handleClick}>
      <div className={icon} />
    </div>
  );
}

export default InteractionComponent;