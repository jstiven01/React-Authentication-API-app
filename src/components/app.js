import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Home from './Home';

const App = () => {
  const [state, setState] = useState({
    loggedInStatus: 'NOT_LOGGED_IN',
    user: {},
  });


  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Home {...props} loggedInStatus={state.loggedInStatus} />
            )}
          />
          <Route
            exact
            path="/dashboard"
            render={props => (
              <Dashboard {...props} loggedInStatus={state.loggedInStatus} />
            )}

          />
        </Switch>
      </BrowserRouter>

    </div>
  );
};

export default App;
