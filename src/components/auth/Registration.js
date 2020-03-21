import React, { useState } from 'react';
import axios from 'axios';

const Registration = ({handleSuccessfulAuth}) => {
  const [form, setState] = useState({
    email: '',
    password: '',
    passwordConfirmation: '',
    registrationErrors: '',
  });

  const handleSubmit = event => {
    event.preventDefault();
    axios.post('http://localhost:3001/registrations', {
      user: {
        email: form.email,
        password: form.password,
        password_confirmation: form.passwordConfirmation,
      },
    },
    { withCredentials: true })
    .then(response => {
        if(response.data.status === 'created') {
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
        <input type="password" name="passwordConfirmation" id="passwordConfirmation" placeholder="Password Confirmation" value={form.passwordConfirmation} onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
