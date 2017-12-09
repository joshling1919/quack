import React from 'react';

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
      [field]: e.target 
    });
  }

  submit(e) {
    e.preventDefault();
    const user = this.state;
    // send in all data 
  }

  render() {
    return(
      <div className = "auth-background" >
        <div className="auth-container">
          <h1>Sign up</h1>
          <form className="auth-form">
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
            <button>Create Account</button>
          </form>
        </div>
      </div>
    );
  };
} 

export default SignUp;