import React from 'react';

export default class MainLayout extends React.Component {
  render() {
    return (
      <div className="container">
        <header>
          <div className="row">
            <div className="login-form col-md-3"></div>
            <div className="login-form col-md-6">
              <h1>Simple Node React Redux App</h1>
            </div>
            <div className="login-form col-md-3"></div>
          </div>
        </header>
        <div className="content">{this.props.children}</div>
      </div>
    );
  }
};
