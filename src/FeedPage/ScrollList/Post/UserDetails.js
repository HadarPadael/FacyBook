import MenuComponent from "../../Navbar/MenuComponent";
import TimeAgo from "./TimeAgo";

function Userdetails({ name, time, profilePic }) {
  return (
    <ul class="list-group">
      <li className="list-group-item">
        <div className="container text-center">
          <div className="row">
            <div className="col-2 text-start">
              <img src={profilePic} alt="profilePic" />
            </div>
            <div className="col-8 text-start">
              <div className="vstack">
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
            <div className="col-2 text-start">
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
