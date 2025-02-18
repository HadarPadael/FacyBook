import "./Feed.css";
import LeftColumn from "./LeftColumn/LeftColumn";
import Navbar from "./Navbar/Navbar";
import RightColumn from "./RightColumn/RightColumn";
import ScrollCol from "./ScrollList/ScrollCol";

function Feed({ setIsLoggedIn }) {
  return (
    <div className="vstack gap-2">
      <div className="p-2">
        <Navbar />
      </div>
      <div id="UnderNavContainer" className="p-1 text-center">
        <div className="row">
          <div id="LeftCol" className="col-3">
            <LeftColumn />
          </div>
          <div id="PostsCol" className="col-6">
            <ScrollCol />
          </div>
          <div id="RightCol" className="col-3">
            <RightColumn />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
