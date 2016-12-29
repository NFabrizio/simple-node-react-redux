import React from 'react';
import ReactDOM from 'react-dom';
import Routing from './components/Routing';

window.onLoad = () => {
  ReactDOM.render(<Routing />, document.getElementById('main'));
};
