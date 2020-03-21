import React, { useState } from 'react';
import axios from 'axios';

const Login = ({handleSuccessfulAuth}) => {
  const [form, setState] = useState({
    email: '',
    password: '',
    loginErrors: '',
  });

  const handleSubmit = event => {
    event.preventDefault();
    axios.post('http://localhost:3001/sessions', {
      user: {
        email: form.email,
        password: form.password,
      },
    },
    { withCredentials: true })
    .then(response => {
      console.log('Login data', response);
        if(response.data.logged_in) {
            handleSuccessfulAuth(response.data)
        }
      console.log(response);
    })
    .catch(error => {
    console.log(error);
    });
  };

  const handleChange = event => {
    setState({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" id="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input type="password" name="password" id="password" placeholder="Password" value={form.password} onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
