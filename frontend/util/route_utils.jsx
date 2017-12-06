import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn }) => (
  <Route path={path} render={props => ( 
    !loggedIn ? <component {...props} /> : <Redirect to ="/" />
  )}/>
);

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.curentUser)
});

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));