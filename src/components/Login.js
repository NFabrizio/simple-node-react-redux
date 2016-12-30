import React from 'react';
import LoginForm from './LoginForm';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      errors: {},
      user: {
        email: '',
        name: '',
        password: ''
      }
    };

    this.loginSubmit = this.loginSubmit.bind(this);
  }
  loginSubmit(event) {
    event.preventDefault();

    const username = ReactDOM.findDOMNode(this.refs.user).value.trim();
    const password = ReactDOM.findDOMNode(this.refs.password).value.trim();

    console.log('Clicked');

  }
  render() {
    return (
      <LoginForm
        onSubmit={this.loginSubmit}
      />
    )
  }
};
