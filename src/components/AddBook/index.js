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

const AddBook = ({ onBookAdded }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    year: "",
    book_cover: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBookCreate = (event) => {
    event.preventDefault();

    const yearConvert = parseInt(formData.year, 10);

    onBookAdded({
      title: formData.title,
      description: formData.description,
      year: yearConvert,
      book_cover: formData.book_cover,
    });

    setFormData({
      title: "",
      description: "",
      year: "",
      book_cover: "",
    });
  };

  return (
    <BodyReg>
      <RegistrationStyled>
        <FormContainer>
          <StyledH2>
            <Label>Adicionar novo Livro</Label>
          </StyledH2>
          <Form onSubmit={handleBookCreate}>
            <FormGroup>
              <Label>Título:</Label>
              <Input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Descrição:</Label>
              <Input
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Ano de Publicação:</Label>
              <Input
                type="text"
                id="year"
                name="year"
                value={formData.year}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Imagem:</Label>
              <Input
                type="text"
                id="image"
                name="book_cover"
                placeholder="Url da imagem"
                value={formData.book_cover}
                onChange={handleInputChange}
              />
            </FormGroup>
            <Button type="submit">Adicionar Livro</Button>
          </Form>
        </FormContainer>
      </RegistrationStyled>
    </BodyReg>
  );
};

export default AddBook;
