import React from 'react';

const LogIn = () => (
  <div className="auth-background">
    <div className="auth-container">
      <h1>Sign in</h1>
      <form className="auth-form">
        <p>Enter your <strong>email address</strong> and <strong>password.</strong></p>
        <input 
          type="email" 
          size={40}
          name="email" 
          placeholder="you@example.com" 
        />
        <input 
          type="password"
          name="password"
          size={40}
          placeholder="password"
        />
        <button>Sign In</button>
      </form>
    </div>
  </div>
);

export default LogIn;