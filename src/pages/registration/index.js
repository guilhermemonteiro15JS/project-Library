import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import imagem from "../../assets/3DBooks.jpeg";
import styled from "styled-components";
import "./index.css";

const RegistrationStyled = styled.div`
  display: flex;
  align-items: center;
`;

const ImageContainer = styled.div`
  text-align: center;
  flex: 1;
  padding: 2rem;
`;

const Image = styled.img`
  max-width: 350px;
  height: 350px;
`;

const FormContainer = styled.div`
  flex: 1;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const FormGroup = styled.div` 
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Label = styled.label`
  font-weight: 1;
`;

const Input = styled.input`
  padding: 10px;
  margin-top: 5px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #30a9d9;
  color: white;
  border: none;
  cursor: pointer;
`;

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
    <RegistrationStyled>
      <ImageContainer>
        <Image src={imagem} alt="Imagem de leitura" />
      </ImageContainer>

      
      <FormContainer>
    <h1 id="titulo_Registration">Registration </h1>
    <Form onSubmit={handleSubmit}>
      <FormGroup>
            <Label>Name:</Label>
            <Input
              type="text"
              name="name"
              placeholder="Digite seu nome"
              value={formData.name}
              onChange={handleInputChange}
              require
            />
          </FormGroup>

      <FormGroup>
      <Label>Email:</Label>
            <Input
              type="email"
              name="email"
              placeholder="Digite seu email"
              value={formData.email}
              onChange={handleInputChange}
              require
            />

</FormGroup>
          <FormGroup>
            <Label>Password:</Label>
            <Input
              type="password"
              name="password"
              placeholder="Digite sua senha"
              value={formData.password}
            onChange={handleInputChange}
              required
            />
          </FormGroup>
          <Button type="submit">Registrar</Button>
        </Form>
      </FormContainer>
    </RegistrationStyled>
          
        
  );
};

export default Registration;
