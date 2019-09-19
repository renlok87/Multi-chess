import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AuthRoute from './auth/AuthRoute';
import Layout from './layout/Layout';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';

const NotFoundRoute = lazy(() => import('./routes/404'));
const LoginRoute = lazy(() => import('./routes/Login'));
const LogoutRoute = lazy(() => import('./routes/Logout'));
const SignupRoute = lazy(() => import('./routes/Signup'));
const HomeRoute = lazy(() => import('./routes/Home'));
const PlayChessRoute = lazy(() => import('./routes/PlayChess'));

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Suspense fallback={<LoadingSpinner />}>
            <Switch>
              <AuthRoute exact path="/" component={HomeRoute} />
              <Route path="/login" component={LoginRoute} />
              <Route path="/logout" component={LogoutRoute} />
              <Route path="/signup" component={SignupRoute} />
              <AuthRoute path="/play-chess/:id" component={PlayChessRoute} />
              <Route component={NotFoundRoute} />
            </Switch>
          </Suspense>
        </Layout>
      </Router>
    );
  }
}

export default App;
