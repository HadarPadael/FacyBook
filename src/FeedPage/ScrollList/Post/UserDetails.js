import MenuComponent from "../../Navbar/MenuComponent";
import TimeAgo from "./TimeAgo";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../AuthContext";
import userAPI from "../../../API/userAPI";

function Userdetails({ name, time, profilePic }) {

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  let user2, otherUser;
  const handleClick = async () => {
    user2 = await userAPI.getUser(name);
    if (user.nickname === user2.nickname) {
      otherUser = false;
    } else {
      otherUser = true;
    }
    navigate("/UserPage", { state: { user: user2, otherUser }});
  };

  return (
    <ul class="list-group">
      <li className="list-group-item">
        <div className="container text-center">
          <div className="row">
            <div className="col-3 text-start">
              <button className="icon-button" onClick={handleClick}>
                <img
                  id="postHeaderPic"
                  src={profilePic}
                  alt="profilePic"
                  className="ProfilePic"
                />
              </button>
            </div>
            <div className="col-8 text-start">
              <div id="detailsContainer" className="vstack">
                <div id="upperName" className="p">
                  <text id="postUserName" className="text-start">
                    {name}
                  </text>
                </div>
                <div id="upperTime" className="p">
                  <TimeAgo timestamp={time} />
                </div>
              </div>
            </div>
            <div className="col-1 text-start">
              <MenuComponent
                option1={"Edit"}
                option2={"Tag"}
                option3={"Delete"}
                icon={"bi bi-three-dots"}
              />
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
}

export default Userdetails;
