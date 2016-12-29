import react from 'react';
import { Router, browserHistory } from 'react-router';
import routes from '../routes';

export default class Router extends react.Component {
  render() {
    return (
      <Router history={ browserHistory } routes={ routes } />
    );
  }
};
