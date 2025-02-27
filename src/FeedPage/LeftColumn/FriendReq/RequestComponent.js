import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import userAPI from "../../../API/userAPI";
import { AuthContext } from "../../../AuthContext";
import { useContext } from "react";

function RequestComponent({ friendReq }) {
  const { token, user, setUser } = useContext(AuthContext);
  const loggedName = user.nickname;
  const name = friendReq.nickname;
  let message, updatedUser;

  const handleApprove = async () => {
    try {
      message = await userAPI.acceptFriendship(name, loggedName, token);
      updatedUser = await userAPI.getUser(loggedName);
      setUser(updatedUser);
      console.log(message.message);
    } catch (err) {
      toast(err);
    }
  };

  const handleDeny = async () => {
    try {
      message = await userAPI.denyRequest(name, token);
      updatedUser = await userAPI.getUser(loggedName);
      setUser(updatedUser);
      console.log(message.message);
    } catch (err) {
      toast(err);
    }
  };

  return (
    <div className="section-container">
      <ToastContainer className="toast-overlay" />
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
          className="btn-group section-container"
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
        </div>
      </div>
    </div>
  );
}

export default RequestComponent;
