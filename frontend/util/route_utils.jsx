import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

const Auth = ({ userExists: LoggedIn, noUser: NotLoggedIn, path, loggedIn }) => (
  <Route path={path} render={(props) => (
    loggedIn ? (
      <LoggedIn { ...props } />
    ) : (
      <NotLoggedIn { ...props } />
    )
  )}/>
);

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.curentUser)
});

export const AuthRoute = connect(mapStateToProps, null)(Auth);