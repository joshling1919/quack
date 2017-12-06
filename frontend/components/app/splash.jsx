import React from 'react';
import { Route } from 'react-router-dom';
import Home from './home';
import SignUp from '../session/signup';

const Splash = () => {
  return(
    <div>
      <nav>
        <div className="nav-content-container">        
          <div className="logo">
            <i className="fa fa-slack" aria-hidden="true"/>
            <a>quack</a>
          </div>
          <button className="demo">Demo</button>
        </div>
      </nav>

      <Route exact path="/" component={Home} />
      <Route path="/signup" component={SignUp} />

    </div>
  )
};

export default Splash;