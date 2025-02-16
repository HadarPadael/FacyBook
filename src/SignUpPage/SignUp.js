import "./SignUp.css";

function SignUp() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <div id="appName" className="mb-3">
        facybook
      </div>

      <div className="card shadow rounded">
        <div className="card-body">
          <h2>Create a new account</h2>
          <h4>It's fast and easy.</h4>
          <hr />
          <form class="row g-3">
            <div class="col-md-6">
              <input
                type="Password"
                placeholder="Password"
                class="form-control is-valid"
                id="validationServer01"
                required
              />
              <div class="valid-feedback">that's a strong password!</div>
            </div>
            <div class="col-md-6">
              <input
                type="password"
                placeholder="Password Validation"
                class="form-control is-valid"
                id="validationServer02"
                required
              />
              <div class="valid-feedback">passwords match!</div>
            </div>
            <div class="col-md-6">
              <div class="input-group has-validation">
                <input
                  type="text"
                  placeholder="Nickname"
                  class="form-control is-invalid"
                  id="validationServerUsername"
                  aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
                  required
                />
                <div
                  id="validationServerUsernameFeedback"
                  class="invalid-feedback"
                >
                  Please choose a nickname.
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="input-group has-validation">
                <input
                  type="text"
                  placeholder="Username"
                  class="form-control is-invalid"
                  id="validationServerUsername"
                  aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
                  required
                />
                <div
                  id="validationServerUsernameFeedback"
                  class="invalid-feedback"
                >
                  Please choose a Username.
                </div>
              </div>
            </div>
            <div class="mb-3">
              <label id="InstructionLabel">
                please choose a profile picture
              </label>
              <input
                type="file"
                class="form-control"
                aria-label="file example"
                required
              />
              <div class="invalid-feedback">
                Example invalid form file feedback
              </div>
            </div>
            <div class="col-12">
              <button class="btn btn-success" type="submit">
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
