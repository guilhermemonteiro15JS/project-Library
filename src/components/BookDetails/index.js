import React from "react";
import { BiArrowLeftCircle } from "react-icons/bi";
import {
  BookDetailsContainer,
  BookTitle,
  BookDescription,
  BookCover,
  CloseButton,
} from "./styled";

const BookDetails = ({ book, onClose }) => {
  const teste = `http://5.22.217.225:8081/api/v1/book/${book.id}`;
  console.log(teste);

  const deleteBook = async (e) => {
    const response = await fetch(
      `http://5.22.217.225:8081/api/v1/book/${book.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            'Bearer "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNTI0IiwiZXhwIjoxNjgyODA4NTE2LCJpYXQiOjE2ODI4MDc2MTYsImlzcyI6Imlzc3Vlcl9kZXNpZ25hdGlvbiJ9.Ivw72PAMoGGmZo0i9ja9qYh9bL3jYJgO8hbUcUhe80A"',
        },
        body: "none",
      }
    );
    const data = await response.json();

    console.log("O livro:", data);
  };

  return (
    <BookDetailsContainer>
      <BookTitle>{book.title}</BookTitle>
      <BookDescription>Description: {book.description}</BookDescription>
      <BookCover src={book.book_cover} alt="Cover" />
      <CloseButton onClick={onClose}>
        <i class="bi bi-arrow-left-circle"></i>
      </CloseButton>
      <CloseButton onClick={deleteBook}></CloseButton>
    </BookDetailsContainer>
  );
};

export default BookDetails;
