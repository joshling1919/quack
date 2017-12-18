import React from 'react';
import { Route, Link } from 'react-router-dom';
import { AuthRoute, ExactAuthRoute } from '../../util/route_utils';
import Home from './home';
import SignUpContainer from '../session/signup_container';
import LogInContainer from '../session/login_container';

const Splash = ({ loggedIn }) => {
  return(
    <div>
      <nav>
        <div className="nav-content-container">        
          <div className="logo">
            <i className="fa fa-slack" aria-hidden="true"/>
            <Link to="/welcome">quack</Link>
          </div>
          <button className="demo">Demo</button>
        </div>
      </nav>

      <ExactAuthRoute path="/welcome" component={Home} loggedIn={loggedIn}/>
      <AuthRoute 
        path="/welcome/login" 
        component={LogInContainer} 
        loggedIn={loggedIn}
      />
      <AuthRoute 
        path="/welcome/signup" 
        component={SignUpContainer} 
        loggedIn={loggedIn} 
      />
    </div>
  )
};

export default Splash;