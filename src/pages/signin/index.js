import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import styled from "styled-components";
import imagem from "../../assets/3DBooks.jpeg";

const SigninStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ImageContainer = styled.div`
  text-align: center; /* Centraliza horizontalmente */
  padding-right: 2rem;
  
`;

const Image = styled.img`
  max-width: 450px;
  /* height: 350px;
  max-width: 500px; */
  height: auto;
`;

const FormContainer = styled.div`
  margin-top: 10px;
  font-size: 20px;
  /* display: flex; */
  justify-content: center;
  flex: 0;
  text-align: center;
`;

const SignInTitle = styled.h1 `
  font-size: 24px;
  margin-bottom: 10px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  text-align: left;
  max-width: 300px;
`;

const FormGroup = styled.div`
  /* margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: flex-start; */
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Label = styled.label`
  /* font-weight: 1;
  margin-top: 10px;
  font-size: 20px;
  text-align: left; */
  font-weight: 1;
  margin-top: 10px;
  font-size: 20px;
  text-align: left; 
`;

const Input = styled.input`
  /* padding: 10px;
  margin-top: 5px;
  margin-left: 10px;
  display: block;
  align-items: center;
  justify-content: center;
  text-align: left; */
  padding: 10px;
  margin-top: 5px;
  display: block;
  text-align: left;

`;

const Button = styled.button`
  border-radius: 20px;
  background-color: #30a9d9;
  color: #fff;
  padding: 18px 30px;
  font-size: 20px;
  outline: none;
  cursor: pointer;
  border: none;
`;

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    fetch("http://5.22.217.225:8081/api/v1/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "csoares@example.com",
        password: "secret",
      }),
      redirect: "follow",
    })
      .then((response) => response.text())
      .then((result) => {
        alert("login sucessful:");
        navigate("/library");
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <SigninStyled>
      <ImageContainer>
        <Image src={imagem} alt="Crianças lendo livros na biblioteca" />
      </ImageContainer>
      <FormContainer>
      <SignInTitle>Sign In</SignInTitle>
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
