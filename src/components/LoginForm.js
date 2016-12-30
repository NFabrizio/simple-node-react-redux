import React, { PropTypes } from 'react';

// const LoginForm = ({
//   onSubmit,
//   // errors
// }) => (
//   <div className="login row">
//     <div className="login-form col-md-3"></div>
//     <div className="login-form col-md-6">
//       <h4>Login</h4>
//       <p>Welcome to the simple Node React Redux App</p>
//       <form className="LoginForm form-horizontal" id="loginForm" onSubmit={onSubmit}>
//         <fieldset>
//           <div className="col-md-12 form-group">
//             <input
//               type="text"
//               className="form-control"
//               id="dfm-mag-username"
//               placeholder="username"
//               ref="user"
//               autoFocus
//               required
//             />
//           </div>
//           <div className=" col-md-12 form-group">
//             <input
//               type="password"
//               className="form-control"
//               id="dfm-mag-password"
//               placeholder="password"
//               ref="password"
//               required
//             />
//           </div>
//           <input
//             type="submit"
//             className="btn btn-login"
//             id="login-button"
//             value="Sign in"
//           />
//         </fieldset>
//       </form>
//     </div>
//     <div className="login-form col-md-3"></div>
//   </div>
// );
//
// LoginForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired
//   // errors: PropTypes.object.isRequired,
// };
//
// export default LoginForm;

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.loginSubmit = this.loginSubmit.bind(this);
    this.myFunc = this.myFunc.bind(this);
  }
  loginSubmit(event) {

    // const username = ReactDOM.findDOMNode(this.refs.user).value.trim();
    // const password = ReactDOM.findDOMNode(this.refs.password).value.trim();

    // console.log('Clicked');
    alert('Fired');
    event.preventDefault();

  }
  myFunc(input) {
    console.log('Here');
  }
  render() {
    return (
      <div className="login row">
        <div className="login-form col-md-3"></div>
        <div className="login-form col-md-6">
          <h4>Login</h4>
          <p>Welcome to the simple Node React Redux App</p>
          <form className="login-form form-horizontal" id="loginForm" onSubmit={this.loginSubmit}>
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
                // onClick={this.loginSubmit}
                //  onClick={this.myFunc}
              />
            </fieldset>
          </form>
        </div>
        <div className="login-form col-md-3"></div>
      </div>
    );
  }
};
