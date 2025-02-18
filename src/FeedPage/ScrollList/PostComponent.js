function PostComponent() {
  return (
    <div id="postContainer" className="card">
      <div class="vstack gap-3">
        <div class="p-1">
          <li className="list-group-item">
            <div className="container text-center">
              <div className="row">
                <div className="col-2 text-start">
                  <img src="/profilePic.jpg" alt="profilePic" />
                </div>
                <div className="col-10 text-start">
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
              </div>
            </div>
          </li>
        </div>
        <div id="postContent" class="p-1">
          <img id="postImage" src="/postPic.jpg" className="card-img-top" />
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <div class="p-1">Third item</div>
      </div>
    </div>
  );
}

export default PostComponent;
