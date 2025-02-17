function LeftColumn() {
  return (
    <div className="vstack gap-2">
      <div className="p-2">
        <div className="container text-center">
          <div className="row">
            <h3>Friend requests</h3>
            <div className="col">
              <img id="friendReqPic" src="/profilePic.jpg" alt="profilePic" />
            </div>
            <div className="col text-start">
              <h6>Nickname friend</h6>
            </div>
            <div
              className="btn-group"
              role="group"
              aria-label="Basic mixed styles example"
            >
              <button type="button" className="btn btn-primary">
                Approve
              </button>
              <button type="button" className="btn btn-secondary">
                Deny
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="p-2" data-bs-spy="scroll">
        <h4>Contacts</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <div className="container text-center">
              <div className="row">
                <div className="col text-start">
                  <img src="/profilePic.jpg" alt="profilePic" />
                </div>
                <div className="col text-start">friend name</div>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="container text-center">
              <div className="row">
                <div className="col text-start">
                  <img src="/profilePic.jpg" alt="profilePic" />
                </div>
                <div className="col text-start">friend name</div>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="container text-center">
              <div className="row">
                <div className="col text-start">
                  <img src="/profilePic.jpg" alt="profilePic" />
                </div>
                <div className="col text-start">friend name</div>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="container text-center">
              <div className="row">
                <div className="col text-start">
                  <img src="/profilePic.jpg" alt="profilePic" />
                </div>
                <div className="col text-start">friend name</div>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="container text-center">
              <div className="row">
                <div className="col text-start">
                  <img src="/profilePic.jpg" alt="profilePic" />
                </div>
                <div className="col text-start">friend name</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LeftColumn;
