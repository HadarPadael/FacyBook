function ChoiceComponent({category, icon}) {
  return (
    <li className="list-group-item">
      <div className="container">
        <div className="row">
          <div className="col text-start">{category}</div>
          <div className="col text-end">
            <i className={icon}></i>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ChoiceComponent;
