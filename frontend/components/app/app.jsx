import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Splash from './splash';
import Messages from '../messages/messages';
import NoMatch from './no_match';
import { fetchCurrentUser } from '../../actions/session_actions';
import { ProtectedRoute } from '../../util/route_utils';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchCurrentUser();
  }

  render() {
    const { loggedIn } = this.props;
    return (
      <div>
        <Switch>
          <ProtectedRoute exact path="/" component={Messages} loggedIn={loggedIn} />
          <Route path="/welcome" render={() => <Splash loggedIn={loggedIn} />} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
});

const mapDispatchToProps = dispatch => ({
  fetchCurrentUser: () => dispatch(fetchCurrentUser()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
