import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

export const AuthRoute = ({ component: Component, path, loggedIn }) => (
  <Route
    path={path}
    render={props => (!loggedIn ? <Component {...props} /> : <Redirect to="/" />)}
  />
);

export const ExactAuthRoute = ({ component: Component, path, loggedIn }) => (
  <Route
    exact
    path={path}
    render={props => (!loggedIn ? <Component {...props} /> : <Redirect to="/" />)}
  />
);

export const ProtectedRoute = ({ component: Component, path, loggedIn }) => (
  <Route
    path={path}
    render={props => (loggedIn ? <Component {...props} /> : <Redirect to="/welcome" />)}
  />
);
