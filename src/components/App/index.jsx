import React from 'react';
import { Route } from 'react-router-dom';
import { loginPath, profilePath, rootPath } from 'utils';
import HomePage from '../HomePage/Root';
import LogIn from '../LogIn/Root';
import Profile from '../Profile/Root';
import Layout from '../Layout/Root';

const App = () => (
  <Layout>
    <Route exact path={rootPath} component={HomePage} />
    <Route path={loginPath} component={LogIn} />
    <Route path={profilePath} component={Profile} />
  </Layout>
);

export default App;
