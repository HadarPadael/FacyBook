import Contacts from "./Contacts/Contacts";
import FriendReq from "./FriendReq/FriendReq";

function LeftColumn() {
  return (
    <div
      className="vstack gap-2 body-tertiary px-3 mb-3 custom-scrollbar"
      id="leftScroll"
    >
      <div className="p-2">
        <FriendReq />
        {/*TO DO: once a db and server interaction is added, implement functionality*/}
      </div>
      <hr></hr>
      <div className="p-2">
        <Contacts />
        {/*TO DO: once a db and server interaction is added, implement functionality*/}
      </div>
    </div>
  );
}

export default LeftColumn;
