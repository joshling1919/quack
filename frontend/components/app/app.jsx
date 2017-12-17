import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Splash from './splash';
import Messages from '../messages/messages';
import NoMatch from './no_match';
import { fetchCurrentUser } from '../../actions/session_actions';
import { AuthRoute } from '../../util/route_utils';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchCurrentUser();
  }

  render() {
    return(
      <div>
        <Switch>
          <AuthRoute 
            path="/" 
            userExists={Messages}
            noUser={Splash}
          /> 
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