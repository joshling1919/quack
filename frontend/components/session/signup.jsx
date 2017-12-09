import React from 'react';

const SignUp = () => (
  <div className="auth-background">
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
          size={40}
          name="email"
          placeholder="you@example.com"
        />
        <input
          type="text"
          size={40}
          name="name"
          placeholder="full name"
        />
        <input
          type="text"
          size={40}
          name="username"
          placeholder="username"
        />
        <input
          type="password"
          name="password"
          size={40}
          placeholder="password"
        />
        <button>Create Account</button>
      </form>
    </div>
  </div>
);

export default SignUp;