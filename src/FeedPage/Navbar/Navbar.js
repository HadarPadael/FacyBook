import NavbarHandlers from "./InteractionLogic/NavbarHandlers";
import NavbarButtonsList from "./NavbarButtonsList";

function Navbar() {
  const { handleHome } = NavbarHandlers();
  return (
    <nav
      id="navbarContainer"
      className="navbar navbar-expand-lg bg-body-tertiary fixed-top"
    >
      <div className="container-fluid shadow">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-4">
            <div className="d-flex align-items-center gap-4">
              <NavbarButtonsList />
            </div>
          </ul>
          <form id="searchBox" className="d-flex" role="search">
            <input
              id="serchBoxInput"
              className="form-control me-2"
              type="search"
              placeholder="Search in facyBook"
              aria-label="Search"
            />
          </form>
          <img id="logoPic" src="/logo.svg" alt="Logo" className="btn" onClick={handleHome}/>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
