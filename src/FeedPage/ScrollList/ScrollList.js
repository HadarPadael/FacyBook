import PostComponent from "./PostComponent";

function ScrollList() {
  return (
    <div className="card shadow-lg rounded">
      <div
        data-bs-spy="scroll"
        data-bs-target="#list-example"
        data-bs-smooth-scroll="true"
        className="scrollspy-example"
        tabindex="0"
      >
        <PostComponent /> {/*   TO DO: make into a list */}
      </div>
    </div>
  );
}

export default ScrollList;
