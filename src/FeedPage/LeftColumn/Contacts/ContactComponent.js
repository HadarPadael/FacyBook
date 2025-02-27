import React, { useEffect } from "react";
import userAPI from "../../../API/userAPI";

function ContactComponent({ name }) {
  let user, profilePic;
  async function fetchUser(name) {
    try {
      user = await userAPI.getUser(name);
      profilePic = user.profilePic;
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchUser(name);
  }, []);

  return (
    <li className="list-group-item">
      <div className="container text-center">
        <div className="row">
          <div className="col text-start">
            <img src={profilePic} alt="profilePic" />
          </div>
          <div className="col text-start">{name}</div>
        </div>
      </div>
    </li>
  );
}

export default ContactComponent;
