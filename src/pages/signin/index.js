import React, { useState } from "react";
import "./index.css";
import styled from "styled-components";
import imagem from "../../assets/3DBooks.jpeg";

const SigninStyled = styled.div`
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

const Form = styled.form` //styledd form
  display: flex;
  flex-direction: column;
  margin:20px;
`;

const FormGroup = styled.div` //space betwem lines 
  margin-bottom: 15px; 
  display:flex;
  justify-content:center;
  align-items:center;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  margin-top: 5px; /* Adicione um pequeno espaçamento superior */
  margin-left: 10px;
  display:flex;
  align-items: center;
  justify-content:center;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #30A9D9;
  color: white;
  border: none;
  cursor: pointer;
`;

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
 
      <SigninStyled>
      <ImageContainer>
        <Image src={imagem} alt="Imagem de leitura" />
      </ImageContainer>
    
      <FormContainer>
        <h1 id="titulo_SignIn">Sign In</h1>
        <Form onSubmit={handleLogin}>
          <FormGroup>
            <Label>Email:</Label>
            <Input
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Password:</Label>
            <Input
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormGroup>
          <Button type="submit">Entrar</Button>
        </Form>
      </FormContainer>
      </SigninStyled>
   
  );
};

export default SignIn;

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  email: "csoares@example.com",
  password: "secret",
});

var requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow",
};

fetch("http://5.22.217.225:8081/api/v1/auth/login", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
