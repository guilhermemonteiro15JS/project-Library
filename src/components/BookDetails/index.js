import React from "react";
import {
  BookDetailsContainer,
  BookTitle,
  BookDescription,
  BookCover,
  CloseButton,
} from "./styled";

const BookDetails = ({ book, onClose }) => {


  return (
    <BookDetailsContainer>
      <BookTitle>{book.title}</BookTitle>
      <BookDescription>Description: {book.description}</BookDescription>
      <p>ID:{book.id}</p>
      <BookCover src={book.book_cover} alt="Cover" />
      <CloseButton onClick={onClose}>
        <i className="bi bi-arrow-left-circle"></i>
      </CloseButton>
  
    </BookDetailsContainer>
  );
};

export default BookDetails;
