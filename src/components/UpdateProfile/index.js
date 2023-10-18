import React, { useState } from "react";

import {
  BodyReg,
  RegistrationStyled,
  FormContainer,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  StyledH2,
} from "./styled";

const UpdateUser = ({ onUpdateUser }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    profile_picture: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUserUpdate = (event) => {
    event.preventDefault();

    onUpdateUser(formData);

    setFormData({
      name: "",
      email: "",
      profile_picture: "",
    });
  };

  return (
    <BodyReg>
<RegistrationStyled>
  <FormContainer>
    <StyledH2>
    <Label>Atualizar Dados do Utilizador</Label>
    </StyledH2>
    <Form onSubmit={handleUserUpdate}>
      <FormGroup>

      <Label>Nome:</Label>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
      </FormGroup>
      <FormGroup>
      <Label>Email:</Label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
 
      </FormGroup>
      <FormGroup>
      <Label>Foto de Perfil:</Label>
          <Input
            type="text"
            name="profile_picture"
            value={formData.profile_picture}
            onChange={handleInputChange}
          />
 
      </FormGroup>
      <Button type="submit">Atualizar Dados</Button>
    </Form>
  </FormContainer>
</RegistrationStyled>
      
      


    </BodyReg>
    
  );
};

export default UpdateUser;