import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/Home';
import Nav from '../components/molecules/Nav';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import Dashboard from '../components/Dashboard';
import requireAuth from '../components/requireAuth';

const routes = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={SignupForm} />
        <Route path="/dashboard" component={requireAuth(Dashboard)} />
      </Switch>
    </div>
  );
}

export default routes;