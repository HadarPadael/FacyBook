function RightColumn() {
  return (
    <ul className="list-group">
      <li className="list-group-item">
        <div className="container text-center">
          <div className="row">
            <div className="col text-start">Nickname</div>
            <div className="col text-end">
              <img src="/profilePic.jpg" alt="profilePic" />
            </div>
          </div>
        </div>
      </li>
      <hr></hr>
      <li className="list-group-item">
        <div className="container">
          <div className="row">
            <div className="col text-start">Friends</div>
            <div className="col text-end">
              <i className="bi bi-people-fill"></i>
            </div>
          </div>
        </div>
      </li>
      <li className="list-group-item">
        <div className="container text-center">
          <div className="row">
            <div className="col text-start">Memories</div>
            <div className="col text-end">
              <i className="bi bi-clock-history"></i>
            </div>
          </div>
        </div>
      </li>
      <li className="list-group-item">
        <div className="container text-center">
          <div className="row">
            <div className="col text-start">Saved</div>
            <div className="col text-end">
              <i className="bi bi-bookmark-fill"></i>
            </div>
          </div>
        </div>
      </li>
      <li className="list-group-item">
        <div className="container text-center">
          <div className="row">
            <div className="col text-start">Groups</div>
            <div className="col text-end">
              <i className="bi bi-person-arms-up"></i>
            </div>
          </div>
        </div>
      </li>
      <li className="list-group-item">
        <div className="container text-center">
          <div className="row">
            <div className="col text-start">Videos</div>
            <div className="col text-end">
              <i className="bi bi-skip-end-btn-fill"></i>
            </div>
          </div>
        </div>
      </li>
      <li className="list-group-item">
        <div className="container text-center">
          <div className="row">
            <div className="col text-start">MarketPlace</div>
            <div className="col text-end">
              <i className="bi bi-shop-window"></i>
            </div>
          </div>
        </div>
      </li>
      <li className="list-group-item">
        <div className="container text-center">
          <div className="row">
            <div className="col text-start">Feeds</div>
            <div className="col text-end">
              <i className="bi bi-postcard-heart-fill"></i>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
}

export default RightColumn;
