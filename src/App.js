import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AuthRoute from './auth/AuthRoute';
import Layout from './layout/Layout';

const NotFoundRoute = lazy(() => import('./routes/404'));
const LoginRoute = lazy(() => import('./routes/Login'));


class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Suspense>
            <Switch>
              {/*<AuthRoute exact path="/" component={HomeRoute} />*/}
              <Route path="/login" component={LoginRoute} />
              <Route component={NotFoundRoute} />
            </Switch>
          </Suspense>
        </Layout>
      </Router>
    );
  }
}

export default App;
