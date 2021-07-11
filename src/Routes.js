import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './container/Register';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Register} />
    </Switch>
  </Router>
);

export default Routes;
