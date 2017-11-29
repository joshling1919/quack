import React from 'react';

const Splash = () => (
  <div>
    <nav>
      <div className="nav-content-container">        
        <div className="logo">
          <i className="fa fa-slack" aria-hidden="true"/>
          <a>quack</a>
        </div>
      </div>
    </nav>
    <div className="splash-container">
      <div className="splash">
        <h1 className="splash-header">Where Work Happens</h1>
        <p className="splash-description">
          When your team needs to kick off a project, hire a new employee, 
          deploy some code, review a sales contract, finalize next year's budget,
          measure A/B test, plan your next office opening, and more, Slack 
          has you covered. 
        </p>
      </div>
    </div>
  </div>
);

export default Splash;