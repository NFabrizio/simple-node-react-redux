import React from 'react';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const getDateTime = new Date().toString();
    return (
      <div class="row">
        <div class="col-md-2 col-md-offset-5">
          <h4>Welcome to the Dashboard</h4>
          <p>Node.js version: </p>
          <p>Path: </p>
          <p>Date and Time: {getDateTime}</p>
          <p>User: </p>
        </div>
      </div>
    );
  }
};
