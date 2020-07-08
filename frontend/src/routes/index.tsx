import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import NewClient from '../pages/NewClient';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/newclient" component={NewClient} />
  </Switch>
);

export default Routes;
