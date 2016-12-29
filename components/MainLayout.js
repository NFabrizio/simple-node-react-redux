import react from 'react';

export default class MainLayout extends react.Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1>Welcome to the Simple Node React Redux App</h1>
        </header>
        <div className="content">{this.props.children}</div>
      </div>
    );
  }
};
