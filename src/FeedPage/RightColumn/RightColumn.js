import ChoicesList from "./ChoicesList";

function RightColumn() {
  return (
    <ul id="rightScroll" className="list-group custom-scrollbar">
      <li className="list-group-item">
        <div className="container text-center">
          <div className="row">
            <div className="col text-start details-Username">Nickname</div>
            <div className="col text-end">
              <img src="/profilePic.jpg" alt="profilePic" />
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
