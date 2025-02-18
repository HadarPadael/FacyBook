import MenuComponent from "../Navbar/MenuComponent";

function Userdetails() {
  return (
    <ul class="list-group">
      <li className="list-group-item">
        <div className="container text-center">
          <div className="row">
            <div className="col-2 text-start">
              <img src="/profilePic.jpg" alt="profilePic" />
            </div>
            <div className="col-8 text-start">
              <div className="vstack">
                <div id="upperName" className="p">
                  <text id="postUserName" className="text-start">
                    friend name
                  </text>
                </div>
                <div id="upperTime" className="p">
                  <text className="text-start">3 weeks ago</text>
                </div>
              </div>
            </div>
            <div className="col-2 text-start">
              <MenuComponent
                option1={"Edit"}
                option2={"Delete"}
                option3={"Tag"}
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
