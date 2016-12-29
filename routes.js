import react from 'react';
import { Route, IndexRoute } from 'react-router'
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';

const routes = (
  <Route path="/" component={ Layout }>
    <IndexRedirect to="dashboard" />
    <Route
      path="dashboard"
      component={ Dashboard }
    />
    <Route
      path="login"
      component={ Login }
    />
    <Route
      path="*"
      component={ NotFound }
    />
  </Route>
);

export default routes;
