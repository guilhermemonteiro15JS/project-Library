import React, {useState} from "react";
import styled from "styled-components";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 400px; /* Defina a largura máxima desejada para o formulário */
  margin: 0 auto;
  text-align: left;
  padding: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Label = styled.label`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  margin-top: 5px;
  display: block;
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
  margin-top: 10px;
`;

const Registration = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="firstName">First Name:</Label>
        <Input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="email">Email:</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">Password:</Label>
        <Input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </FormGroup>
      <Button type="submit">Register</Button>
    </FormStyled>
  );
};

export default Registration;
