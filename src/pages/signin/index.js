import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import imagem from "../../assets/3DBooks.jpeg";
import { SigninStyled, ImageContainer, Image, FormContainer,
Form,
FormGroup,
Label,
Label2,
Input,
Button } from "./styled";

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
          <div>
            <Label2>Se não estás registado, clica abaixo</Label2>
            <Button onClick={() => navigate("/registration")}>
              Registration
            </Button>
          </div>
        </Form>
      </FormContainer>
    </SigninStyled>
  );
};

export default SignIn;
