import ImageHelper from "../../../SignUpPage/InteractionLogic/ImageHelper";

function RequestComponent({ friendReq }) {
  const profilePicString = friendReq.profilePic;
  const blobUrl = ImageHelper.base64ToBlobUrl(profilePicString);

  return (
    <div className="row">
      <div className="col">
        <img id="friendReqPic" src={blobUrl} alt="profilePic" />
      </div>
      <div className="col text-start">
        <h6>{friendReq.nickname}</h6>
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
  );
}

export default RequestComponent;
