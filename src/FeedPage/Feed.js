import "./Feed.css";
import LeftColumn from "./LeftColumn/LeftColumn";
import Navbar from "./Navbar/Navbar";
import ScrollList from "./ScrollList/ScrollList";

function Feed() {
  return (
    <div className="vstack gap-2">
      <div class="p-2">
        <Navbar />
      </div>
      <div id="UnderNavContainer" class="p-2 text-center">
          <div className="row">
            <div id="LeftCol" className="col-3">
              <LeftColumn />
            </div>
            <div className="col-6">
              <ScrollList />
            </div>
            <div className="col-3">Column</div>
          </div>
        </div>
      </div>
  );
}

export default Feed;
