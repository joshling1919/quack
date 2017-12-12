import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './home';
import SignUpContainer from '../session/signup_container';
import LogInContainer from '../session/login_container';

const Splash = () => {
  return(
    <div>
      <nav>
        <div className="nav-content-container">        
          <div className="logo">
            <i className="fa fa-slack" aria-hidden="true"/>
            <Link to="/">quack</Link>
          </div>
          <button className="demo">Demo</button>
        </div>
      </nav>

      <Route exact path="/" component={Home} />
      <Route path="/signup" component={SignUpContainer} />
      <Route path="/login" component={LogInContainer} />

    </div>
  )
};

export default Splash;