import "./Feed.css";

function Feed() {
  return (
    <div class="vstack gap-4">
      <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div class="container-fluid shadow">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-4">
              <div class="d-flex align-items-center gap-3">
                <div class="row">
                  <div class="col">
                    <img src="/profilePic.jpg" alt="profilePic" />
                  </div>
                  <div class="col">
                    <li class="nav-item">
                      <button className="icon-button">
                        <p class="bi bi-bell-fill"></p>
                      </button>
                    </li>
                  </div>
                  <div class="col">
                    <li class="nav-item">
                      <button className="icon-button">
                        <p class="bi bi-chat-dots-fill"></p>
                      </button>
                    </li>
                  </div>
                  <div class="col">
                    <li class="nav-item">
                      <button className="icon-button">
                        <p class="bi bi-toggle2-on"></p>
                      </button>
                    </li>
                  </div>
                  <div class="col">
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <p class="bi bi-list"></p>
                      </a>
                      <ul class="dropdown-menu">
                        <li>
                          <a class="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <hr class="dropdown-divider" />
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>
                  </div>
                </div>
              </div>
            </ul>
            <form id="searchBox" class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search in facyBook"
                aria-label="Search"
              />
            </form>
            <img src="/logo.svg" alt="Logo" />
          </div>
        </div>
      </nav>
      <div class="container text-center">
        <div class="row">
          <div class="col">Column</div>
          <div class="col">
            <div class="row">
              <div class="col-8">
                <div
                  data-bs-spy="scroll"
                  data-bs-target="#list-example"
                  data-bs-smooth-scroll="true"
                  class="scrollspy-example"
                  tabindex="0"
                >
                  <h4 id="list-item-1">Item 1</h4>
                  <p>...</p>
                  <h4 id="list-item-2">Item 2</h4>
                  <p>...</p>
                  <h4 id="list-item-3">Item 3</h4>
                  <p>...</p>
                  <h4 id="list-item-4">Item 4</h4>
                  <p>...</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col">Column</div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
