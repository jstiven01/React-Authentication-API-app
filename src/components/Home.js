import React from 'react';
import Registration from './auth/Registration';

const Home = ({ loggedInStatus, history }) => {
  const handleSuccessfulAuth = data => {
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

    </div>
  );
};


export default Home;
