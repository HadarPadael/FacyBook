import Contacts from "./Contacts/Contacts";
import FriendReq from "./FriendReq/FriendReq";

function LeftColumn() {
  return (
    <div className="vstack gap-2">
      <div className="p-2">
        <FriendReq/>
      </div>
      <hr></hr>
      <div className="p-2" data-bs-spy="scroll">
        <Contacts/>
      </div>
    </div>
  );
}

export default LeftColumn;
