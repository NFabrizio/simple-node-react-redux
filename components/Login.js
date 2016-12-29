import react from 'react';

export default class LoginForm extends react.Component {
  constructor(props) {
    super(props);
  },
  loginSubmit(event) {
    event.preventDefault();

    const username = ReactDOM.findDOMNode(this.refs.user).value.trim();
    const password = ReactDOM.findDOMNode(this.refs.password).value.trim();

  },
  render() {
    return (
      <div className="login row">
        <div className="login-form col-md-7 col-sm-12 col-xs-12">
          <h4>Login</h4>
          <p>Welcome to the simple Node React Redux App</p>
          <form className="LoginForm form-horizontal" id="loginForm" onSubmit={this.loginSubmit}>
            <fieldset>
              <div className="col-md-12 form-group">
                <input
                  type="text"
                  className="form-control"
                  id="dfm-mag-username"
                  placeholder="username"
                  ref="user"
                  autoFocus
                  required
                />
              </div>
              <div className=" col-md-12 form-group">
                <input
                  type="password"
                  className="form-control"
                  id="dfm-mag-password"
                  placeholder="password"
                  ref="password"
                  required
                />
              </div>
              <input
                type="submit"
                className="btn btn-login"
                id="login-button"
                value="Sign in"
                onClick={this.loginSubmit}
              />
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
};
