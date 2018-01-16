import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { logout } from '../../actions/session_actions';

const Messages = ({ logOut }) => (
  <div className="messages-container">
    <button className="logout" onClick={logOut}>
      Sign Out
    </button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logout()),
});

Messages.propTypes = {
  logOut: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Messages);
