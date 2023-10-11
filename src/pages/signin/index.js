import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './index.css'

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
  
    
    fetch("http://5.22.217.225:8081/api/v1/auth/login", {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        "email": "csoares@example.com",
        "password": "secret"
      }),
      redirect: 'follow'
    })
      .then(response => response.text())
      .then(result => {
        alert('login sucessful:');
        navigate('/library');
        console.log(result);
      })
      .catch(error => console.log('error', error));
  };
  

  return (
    <div>
      <h1 id="titulo_SignIn">Sign In </h1>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default SignIn;
