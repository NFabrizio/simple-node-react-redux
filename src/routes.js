import React from 'react';
import { Route, IndexRedirect } from 'react-router'
import MainLayout from './components/MainLayout';
import LoginForm from './components/LoginForm';
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
      component={ LoginForm }
    />
    <Route
      path="*"
      component={ NotFound }
    />
  </Route>
);

export default routes;
