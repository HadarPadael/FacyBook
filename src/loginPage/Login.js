import "./Login.css";
import ValidateLogin from "./InteractionLogic/ValidateLogin";
import ToSignUp from "./InteractionLogic/ToSignUp";

function Login() {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <div id="card" className="card shadow-lg rounded">
            <div className="card-body">
              <ValidateLogin />
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
              <ToSignUp />
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
