import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import userAPI from "../../../API/userAPI";
import { AuthContext } from "../../../AuthContext";
import { useContext } from "react";

function RequestComponent({ friendReq }) {
  const { token, user } = useContext(AuthContext);
  const loggedName = user.nickname;
  const name = friendReq.nickname;
  let message;

  const handleApprove = async () => {
    try {
      message = await userAPI.acceptFriendship(name, loggedName, token);
      toast(message.message);
    } catch (err) {
      toast(err);
    }
  };

  const handleDeny = async () => {
    try {
      message = await userAPI.cancelRequest(name, token);
      toast("friend request deleted successfully!");
      console.log(message.message);
    } catch (err) {
      toast(err);
    }
  };

  return (
    <div className="row">
      <div className="col">
        <img
          id="friendReqPic"
          src={friendReq.profilePic}
          alt="profilePic"
          className="ProfilePic"
        />
      </div>
      <div className="col text-start">
        <h6>{name}</h6>
      </div>
      <div
        className="btn-group"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleApprove}
        >
          Approve
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleDeny}
        >
          Deny
        </button>
        <ToastContainer />
      </div>
    </div>
  );
}

export default RequestComponent;
