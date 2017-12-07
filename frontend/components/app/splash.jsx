import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './home';
import SignUp from '../session/signup';
import LogIn from '../session/login';

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
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={LogIn} />

    </div>
  )
};

export default Splash;