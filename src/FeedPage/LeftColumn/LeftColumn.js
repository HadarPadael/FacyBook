import { useState } from "react";
import Contacts from "./Contacts/Contacts";
import FriendReq from "./FriendReq/FriendReq";
import userAPI from "../../API/userAPI";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthContext";

function isEmpty(array) {
  return array.length > 0;
}

async function getRequester(name, setRequester) {
  try {
    let requester;
    requester = await userAPI.getUser(name);
    setRequester(requester);
  } catch (err) {
    console.log(err);
  }
}

function LeftColumn() {
  const { user } = useContext(AuthContext);
  const [requester, setRequester] = useState("");
  const friends = user.friendRequests;

  useEffect =
    (() => {
      getRequester(friends[friends.length - 1], setRequester);
    },
    []);

  return (
    <div
      className="vstack gap-2 body-tertiary px-3 mb-3 custom-scrollbar"
      id="leftScroll"
    >
      <div className="p-2">
        {isEmpty(user.friendRequests) && <FriendReq friendReq={requester} />}
      </div>
      <hr></hr>
      <div className="p-2">
        {isEmpty(user.friends) && <Contacts friends={user.friends} />}
      </div>
    </div>
  );
}

export default LeftColumn;
