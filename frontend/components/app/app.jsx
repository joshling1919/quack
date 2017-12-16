import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Splash from './splash';
import NoMatch from './no_match';
import { fetchCurrentUser } from '../../util/session_api_util';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchCurrentUser();
  }

  // Recap of current plan:
  // fetch current user in component did mount
  // once the user object comes back, defer to the
  // auth and protected routes to determine where to
  // route to.

  render() {
    return(
      <div>
        <Switch>
          <AuthRoute component={ Splash } path="/" /> 
          <Route exact path="/messages" component={NoMatch} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
} 

const mapDispatchToProps = dispatch => ({
  fetchCurrentUser: () => dispatch(fetchCurrentUser()),
})

export default connect(null, mapDispatchToProps)(App);