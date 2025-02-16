import InputComponent from "./InputComponent";
import "./Login.css";

function Login() {
  return (
    <div className="container text-center">
      <div className="row align-items-start">
        <div className="col">
          <div className="card shadow rounded">
            <div className="card-body">
              <InputComponent type={"text"} placeholder={"Username"} />
              <InputComponent type={"password"} placeholder={"Password"} />
              <a href="#" className="btn btn-primary d-grid">
                log in
              </a>
              <div id="liveAlertPlaceholder"></div>
              <button
                type="button"
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
          <h2>we are happy that you're back!</h2>
        </div>
      </div>
    </div>
  );
}

export default Login;
