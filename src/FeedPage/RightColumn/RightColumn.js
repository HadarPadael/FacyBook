import ChoicesList from "./ChoicesList";

function RightColumn({user}) {

  return (
    <ul id="rightScroll" className="list-group custom-scrollbar">
      <li className="list-group-item">
        <div className="container top-container text-center">
          <div className="row">
            <div className="col text-start details-Username">
              {user.nickname}
            </div>
            <div className="col text-end">
              <img
                id="infoProfilePic"
                src={user.profilePic}
                alt="profilePic"
                className="ProfilePic"
              />
            </div>
          </div>
        </div>
      </li>
      <hr></hr>
      {ChoicesList}
    </ul>
  );
}

export default RightColumn;
