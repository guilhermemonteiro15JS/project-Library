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

const DeleteBook = ({ onDeleteBook }) => {
  const [bookID, setBookID] = useState("");

  const handleBookDelete = (event) => {
    event.preventDefault();

    onDeleteBook(bookID);

    setBookID("");
  };

  return (
    <BodyReg>
      <RegistrationStyled>
        <FormContainer>
          <StyledH2>
            <Label>Apagar Livro</Label>
          </StyledH2>
          <Form onSubmit={handleBookDelete}>
            <FormGroup>
              <Label>ID do Livro:</Label>
              <Input
                type="text"
                name="ID"
                value={bookID}
                onChange={(e) => setBookID(e.target.value)}
                required
              />
            </FormGroup>
            <Button type="submit">Remover Livro</Button>
          </Form>
        </FormContainer>
      </RegistrationStyled>
    </BodyReg>
  );
};

export default DeleteBook;
