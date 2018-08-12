import React from 'react';
import { Switch, Route } from 'react-router';

import MainContainer from './components/MainContainer';

export default (
  <Switch>
    <Route exact path="/" component={MainContainer} />
  </Switch>
);
