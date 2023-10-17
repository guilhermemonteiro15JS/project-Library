import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

const Form = styled.form`
  //styledd form
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const FormGroup = styled.div`
  //space betwem lines
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
const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    let response;
    try {
      response = await fetch("http://5.22.217.225:8081/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        redirect: "follow",
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    if (response?.ok) {
      const data = await response.json();
      
      localStorage.setItem ("userData",JSON.stringify(data.data));
      console.log(data.data)
      // localStorage.setItem("authToken", token);
/*       const uName = data.data.name;
      localStorage.setItem("userName", uName);
      const uEmai = data.data.email;
      localStorage.setItem("userEmail", uEmai);
      const pPicture = data.data.email;
      localStorage.setItem("userPicture", pPicture); */

      alert("login sucessful:");
      navigate("/library");
    } else {
      console.log(`HTTP Response Code: ${response?.status}`);
      alert("login failed");
      setEmail("");
      setPassword("");
    }
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
              name="email"
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
              name="password"
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
