import Contacts from "./Contacts/Contacts";
import FriendReq from "./FriendReq/FriendReq";

function isEmpty(array) {
  return array.length > 0;
}

function LeftColumn({ user }) {
  return (
    <div
      className="vstack gap-2 body-tertiary px-3 mb-3 custom-scrollbar"
      id="leftScroll"
    >
      {/*TO DO: create a function that gets the last friendreqests user from the server, and pass it as  friendReq*/}
      <div className="p-2">
        {isEmpty(user.friendRequests) && <FriendReq friendReq={""} />}
      </div>
      <hr></hr>
      <div className="p-2">
        {isEmpty(user.friends) && <Contacts friends={user.friends} />}
      </div>
    </div>
  );
}

export default LeftColumn;
