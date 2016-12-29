import React from 'react';
import { Route, IndexRedirect } from 'react-router'
import MainLayout from './components/MainLayout';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';

const routes = (
  <Route path="/" component={ MainLayout }>
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
