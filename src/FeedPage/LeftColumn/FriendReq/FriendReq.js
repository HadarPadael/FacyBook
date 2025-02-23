function FriendReq() {
  return (
    <div className="container top-container text-center">
      <div className="row">
        <h3 id="friendREQ">Friend requests</h3>
        <div className="col">
          <img id="friendReqPic" src="/profilePic.jpg" alt="profilePic" />
        </div>
        <div className="col text-start">
          <h6>Nickname friend</h6>
        </div>
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button type="button" className="btn btn-primary">
            Approve
          </button>
          <button type="button" className="btn btn-secondary">
            Deny
          </button>
        </div>
      </div>
    </div>
  );
}

export default FriendReq;
