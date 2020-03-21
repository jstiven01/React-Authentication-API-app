import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Home from './Home';

const App = () => {
  const [state, setState] = useState({
    loggedInStatus: 'NOT_LOGGED_IN',
    user: {},
  });

  const handleLogin = data => {
    setState({
      ...state,
      loggedInStatus: 'LOGGED_IN',
      user: data.user,
    });
  };

  const checkLoginStatus = () => {
    axios.get('http://localhost:3001/logged_in',
      { withCredentials: true }).then(response => {
      if (response.data.logged_in && state.loggedInStatus === 'NOT_LOGGED_IN') {
        setState({
          ...state,
          loggedInStatus: 'LOGGED_IN',
          user: response.data.user,
        });
      } else if (!response.data.logged_in && state.loggedInStatus === 'LOGGED_In') {
        setState({
          ...state,
          loggedInStatus: 'NOT_LOGGED_IN',
          user: {},
        });
      }
    }).catch(error => {
      console.log(error);
    });
  };

  useEffect(() => {
    checkLoginStatus();
  });


  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Home {...props} handleLogin={handleLogin} loggedInStatus={state.loggedInStatus} />
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
