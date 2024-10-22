
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { email, password }
    localStorage.setItem('user', JSON.stringify(newUser));
    navigate('/login');
  };

  return (
    <div>

      <h2>Register</h2>

      <div className='form'>

      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" id='email' onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" id='password' onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Register</button>
      </form>

      </div>
  

    </div>
  );
};

export default Register;
