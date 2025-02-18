import SignUpList from "./SignUpList";
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
          <form class="row g-3">
            {SignUpList}
            <div className="mb-3">
              <label id="InstructionLabel">
                please choose a profile picture
              </label>
              <input
                type="file"
                className="form-control"
                aria-label="file example"
                required
              />
            </div>
            <div className="col-12">
              <button id="sign-up-btn" className="btn btn-success" type="submit">
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
