function ColumnComponent({ displayPic, IconClass, displayIcon }) {
  return (
    <div className="col">
      <li className="nav-item">
        <button className="icon-button">
          <img
            src="/profilePic.jpg"
            alt="profilePic"
            style={{ display: displayPic }}
          />
          <p className={IconClass} style={{ display: displayIcon }}></p>
        </button>
      </li>
    </div>
  );
}

export default ColumnComponent;
