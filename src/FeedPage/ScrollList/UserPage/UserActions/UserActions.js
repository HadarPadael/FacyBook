import { useContext, useState, React } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../../../AuthContext";
import userAPI from "../../../../API/userAPI";

function UserActions({ user2 }) {
    
  const { token, user } = useContext(AuthContext);
  const friendRequests = user2.friendRequests;
  const friends = user2.friends;
  const loggedUser = user.nickname;
  const [isPending, setIsPending] = useState(
    friendRequests.includes(loggedUser)
  );

  const handleFriendClick = async () => {
    let message;
    try {
      if (isPending) {
        message = await userAPI.cancelRequest(user2.nickname, token);
      } else {
        message = await userAPI.askToBeFriend(user2.nickname, token);
      }

      setIsPending((prev) => !prev);
      toast(message.message);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="btn-group float-end col-4 userActions" role="group">
      {!friends.includes(loggedUser) && (
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={handleFriendClick}
        >
          {isPending ? "pending..." : "friend request"}
        </button>
      )}

      <ToastContainer />
      <button type="button" className="btn btn-outline-primary">
        Message
      </button>
    </div>
  );
}

export default UserActions;
