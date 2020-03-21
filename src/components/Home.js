import React from 'react';
import axios from 'axios';
import Registration from './auth/Registration';
import Login from './auth/Login';

const Home = ({ handleLogin, loggedInStatus, history, handleLogout  }) => {
  const handleSuccessfulAuth = data => {
    handleLogin(data);
    history.push('/dashboard');
  };

  const handleLogoutClick = ()=> {
    console.log('click logout')
    axios.delete('http://localhost:3001/logout',
    { withCredentials: true}
    ).then(response =>{
      console.log('logout', response)
      handleLogout()
    }).catch(error =>{
      console.log('error logout', error)
    })
  }

  return (
    <div>
      <h1>This is home</h1>
      <h1>
        Status:
        {loggedInStatus}
      </h1>
      {loggedInStatus === 'LOGGED_IN' && (<button type="button" onClick={handleLogoutClick}>LOGOUT</button>)}

      <Registration handleSuccessfulAuth={handleSuccessfulAuth} />
      <Login handleSuccessfulAuth={handleSuccessfulAuth} />

    </div>
  );
};


export default Home;
