function ColumnComponent({ displayPic, IconClass, displayIcon, onClick }) {
  return (
    <div className="col">
      <li className="nav-item">
        <button className="icon-button" onClick={onClick}>
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
