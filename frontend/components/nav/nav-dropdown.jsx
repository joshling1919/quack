import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { logout } from '../../actions/session_actions';

class NavDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownClass: false,
    };

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
  }

  componentDidMount() {
    const body = document.querySelector('body');

    body.addEventListener('click', this.closeDropdown);
  }

  componentWillUnmount() {
    const body = document.querySelector('body');
    body.removeEventListener('click', this.closeDropdown);
  }

  dropdown() {
    return (
      <div className={`show-${this.state.dropdownClass}`}>
        <button>Edit Profile</button>
        <button className="logout" onClick={this.props.logOut}>
          Sign Out
        </button>
      </div>
    );
  }

  toggleDropdown(e) {
    if (e.target.closest('div').className !== 'show-true') {
      this.setState({ dropdownClass: !this.state.dropdownClass });
    }
  }

  closeDropdown(e) {
    if (
      this.state.dropdownClass &&
      e.target.closest('div').className !== 'show-true' &&
      e.target.closest('div').className !== 'nav-dropdown'
    ) {
      this.setState({ dropdownClass: false });
    }
  }

  render() {
    const { userFullname } = this.props;
    return (
      <div className="nav-dropdown" onClick={this.toggleDropdown} role="menu" tabIndex="0">
        <h3>Quack</h3>
        <span>{userFullname}</span>
        {this.dropdown()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userFullname: state.session.currentUser.fullname,
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logout()),
});

NavDropdown.propTypes = {
  logOut: PropTypes.func.isRequired,
  userFullname: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavDropdown);
