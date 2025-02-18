function ContactComponent({profilePic, friendName}) {
    return (
      <li className="list-group-item">
        <div className="container text-center">
          <div className="row">
            <div className="col text-start">
              <img src={profilePic} alt="profilePic" />
            </div>
            <div className="col text-start">{friendName}</div>
          </div>
        </div>
      </li>
    );
}

export default ContactComponent;