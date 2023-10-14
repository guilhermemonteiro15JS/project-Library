import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(formData)
      }
      
    
 
    fetch("http://5.22.217.225:8081/api/v1/auth/register", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        alert('Registration sucessful:');
        navigate('/SignIn');
        console.log(result);
      })
      .catch((error) => console.log("error", error));

    e.preventDefault();
    console.log("Form submitted:", formData);
  
  };
  
  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">First Name:</label>
          <input
            type="text"
            placeholder="Digite seu nome"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="Digite seu email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder="Digite sua senha"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
