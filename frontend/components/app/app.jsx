import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Splash from './splash';
import NoMatch from './no_match';

const App = () => (
  <div>
    <Switch>
      <Route path="/" component={Splash} />
      <Route exact path="/messages" component={NoMatch} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default App;