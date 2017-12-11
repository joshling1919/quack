import React from 'react';

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.submit = this.submit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.target.value,
      });
    };
  }

  submit(e) {
    e.preventDefault();
  }

  render() {
    return(
      <div className="auth-background">
        <div className="auth-container">
          <h1>Sign in</h1>
          <form className="auth-form" onSubmit={this.submit}>
            <p>Enter your <strong>email address</strong> and <strong>password.</strong></p>
            <input 
              type="email" 
              onChange={this.update('email')}
              size={40}
              name="email" 
              placeholder="you@example.com" 
            />
            <input 
              type="password"
              onChange={this.update('password')}
              name="password"
              size={40}
              placeholder="password"
            />
            <input type="submit" value="Sign In" />
          </form>
        </div>
      </div>
    );
  }
};


export default LogIn;