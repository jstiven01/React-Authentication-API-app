import React from 'react';
import Registration from './auth/Registration';
import Login from './auth/Login';

const Home = ({ handleLogin, loggedInStatus, history }) => {
  const handleSuccessfulAuth = data => {
    handleLogin(data);
    history.push('/dashboard');
  };

  return (
    <div>
      <h1>This is home</h1>
      <h1>
        Status:
        {loggedInStatus}
      </h1>

      <Registration handleSuccessfulAuth={handleSuccessfulAuth} />
      <Login handleSuccessfulAuth={handleSuccessfulAuth} />

    </div>
  );
};


export default Home;
