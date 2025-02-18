import Posts from "./Posts";

function ScrollCol() {
  return (
    <div
      data-bs-spy="scroll"
      data-bs-target="#list-example"
      data-bs-smooth-scroll="true"
      className="scrollspy-example"
      tabindex="0"
    >
      <Posts /> {/*   TO DO: make into a list */}
    </div>
  );
}

export default ScrollCol;
