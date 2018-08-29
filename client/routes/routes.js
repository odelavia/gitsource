import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/Home';
import Nav from '../components/molecules/Nav';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Dashboard from '../components/Dashboard';
import requireAuth from '../components/hoc/requireAuth';

const routes = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/dashboard" component={requireAuth(Dashboard)} />
      </Switch>
    </div>
  );
}

export default routes;