import React, { useEffect, useState } from "react";
import userAPI from "../../../API/userAPI";

function ContactComponent({ name }) {
  let user;
  const [profilePic, setProfilePic] = useState("");
  async function fetchUser(name) {
    try {
      user = await userAPI.getUser(name);
      setProfilePic(user.profilePic);
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
          <div className="col-3 text-start">
            <img
              className="ProfilePic"
              id="contactPic"
              src={profilePic}
              alt="profilePic"
            />
          </div>
          <div
            className="col-6 d-flex align-items-center justify-content-center"
            id="contactName"
          >
            {name}
          </div>
        </div>
      </div>
    </li>
  );
}

export default ContactComponent;
