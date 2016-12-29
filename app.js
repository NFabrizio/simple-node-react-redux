import react from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Router';

window.onLoad = () => {
  ReactDOM.render(<Router />, document.getElementById('main'));
};
