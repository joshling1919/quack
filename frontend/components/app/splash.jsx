import React from 'react';

const Splash = () => (
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
    <div className="splash-container">
      <div className="splash">
        <div className="splash-text">
          <h1 className="splash-header">Where Work Happens</h1>
          <p className="splash-description">
            When your team needs to kick off a project, hire a new employee, 
            deploy some code, review a sales contract, finalize next year's budget,
            measure A/B test, plan your next office opening, and more, Slack 
            has you covered. 
          </p>
          <div className="splash-auth">
            <button>Get Started</button>
            <p>Already using Quack? <a>Sign In.</a></p>
          </div>
        </div>
        <div className="splash-image-container">
          <img 
            src="https://a.slack-edge.com/52353/marketing/img/home/home_illo.png"
            srcSet="https://a.slack-edge.com/52353/marketing/img/home/home_illo.png 1x, https://a.slack-edge.com/52353/marketing/img/home/home_illo@2x.png 2x"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Splash;