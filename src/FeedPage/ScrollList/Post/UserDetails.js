import MenuComponent from "../../Navbar/MenuComponent";
import TimeAgo from "./TimeAgo";
import { Link } from "react-router-dom";

function Userdetails({ name, time, profilePic }) {
  return (
    <ul class="list-group">
      <li className="list-group-item">
        <div className="container text-center">
          <div className="row">
            <div className="col-3 text-start">
              <Link to="/UserPage" state={{ name, profilePic }}>
                <img src={profilePic} alt="profilePic" />
              </Link>
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
