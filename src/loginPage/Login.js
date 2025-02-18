import "./Login.css";
import LogInList from "./LogInList";

function Login() {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <div id="card" className="card shadow-lg rounded">
            <div className="card-body">
              {LogInList}
              <a href="#" className="btn btn-primary d-grid">
                log in
              </a>
              <div id="liveAlertPlaceholder"></div>
              <button
                type="button"
                s
                className="btn btn-primary"
                id="liveAlertBtn"
              >
                forgot password?
              </button>
              <hr />
              <a href="#" id="sign-up-btn" className="btn btn-success">
                Sign up
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <h1 id="appName">facybook</h1>
          <h2>We are happy that you're back!</h2>
        </div>
      </div>
    </div>
  );
}

export default Login;
