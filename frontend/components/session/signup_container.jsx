import React from 'react';

import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';


class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      fullname: '',
      username: '',
      password: '',
    };

    this.submit = this.submit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value,
    });
  }

  submit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.signupUser({ user });
  }

  render() {
    return (
      <div className="auth-background" >
        <div className="auth-container">
          <h1>Sign up</h1>
          <form className="auth-form" onSubmit={this.submit}>
            <p>
              Enter your
          <strong> email address</strong>,
          <strong> full name</strong>,
          <strong> username</strong>
              , and
          <strong> password.</strong>
            </p>
            <input
              type="email"
              onChange={this.update('email')}
              size={40}
              name="email"
              placeholder="you@example.com"
            />
            <input
              type="text"
              onChange={this.update('fullname')}
              size={40}
              name="name"
              placeholder="full name"
            />
            <input
              type="text"
              onChange={this.update('username')}
              size={40}
              name="username"
              placeholder="username"
            />
            <input
              type="password"
              onChange={this.update('password')}
              name="password"
              size={40}
              placeholder="password"
            />
            <input type="submit" value="Create Account" />
          </form>
        </div>
      </div>
    );
  };
}; 

const mapDispatchToProps = (dispatch) => ({
  signupUser: function (user) {
    return dispatch(signup(user));
  }
});

export default connect(null, mapDispatchToProps)(SignUp);