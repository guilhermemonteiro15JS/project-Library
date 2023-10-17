import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import imagem from "../../assets/Prancheta3.png";
import {
  BodyReg,
  RegistrationStyled,
  FormGroup,
  FormContainer,
  Form,
  Label,
  Input,
  Button,
} from "./styled";

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
      body: JSON.stringify(formData),
    };

    fetch("http://5.22.217.225:8081/api/v1/auth/register", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        alert("Registration sucessful:");
        navigate("/SignIn");
        console.log(result);
      })
      .catch((error) => console.log("error", error));

    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <BodyReg>
      <RegistrationStyled>
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
    </BodyReg>
  );
};

export default Registration;
