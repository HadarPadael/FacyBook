import ValidateFields from "./InteractionLogic/ValidateFields";
import "./SignUp.css";

function SignUp() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <div id="appName" className="mb-3">
        facybook
      </div>
      <div className="card shadow-lg rounded">
        <div id="SignUpCard" className="card-body">
          <h2>Create a new account</h2>
          <h4>It's fast and easy.</h4>
          <hr />
          <ValidateFields />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
