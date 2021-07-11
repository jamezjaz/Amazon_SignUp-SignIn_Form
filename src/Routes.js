import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Data from './components/Data';
import Register from './container/Register';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Register} />
      <Route path="/data" component={Data} />
    </Switch>
  </Router>
);

export default Routes;
