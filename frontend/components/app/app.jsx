import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Splash from './splash';
import NoMatch from './no_match';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Splash} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default App;