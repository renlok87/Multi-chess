import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AuthRoute from './auth/AuthRoute';
import Layout from './layout/Layout';



class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Suspense>
            <Switch>
              <AuthRoute exact path="/" component={HomeRoute} />
            </Switch>
          </Suspense>
        </Layout>
      </Router>
    );
  }
}

export default App;
