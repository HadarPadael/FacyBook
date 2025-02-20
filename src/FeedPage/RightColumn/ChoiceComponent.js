function ChoiceComponent({ category, icon }) {
  return (
    <li className="list-group-item">
      <div className="container">
        <div className="row">
          <div id="choiceBTN" className="col text-start btn btn-light">
            {category}
          </div>
          <div className="col text-end">
            <i id="choiceBTN-icon" className={icon}></i>
          </div>
        </div>
      </div>
      <hr></hr>
    </li>
  );
}

export default ChoiceComponent;
