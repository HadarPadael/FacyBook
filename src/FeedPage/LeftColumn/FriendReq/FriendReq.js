import RequestComponent from "./RequestComponent";

function FriendReq({friendReq}) {
  return (
    <div className="container top-container text-center">
      <div className="row">
        <h3 id="friendREQ">Your friend requests</h3>
      </div>
      <RequestComponent friendReq={friendReq}/>
    </div>
  );
}

export default FriendReq;
