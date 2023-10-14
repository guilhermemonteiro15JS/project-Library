import React from "react";

const BookDetails = ({ book, onClose }) => {
  return (
    <div>
      <h2>{book.title}</h2>
      <p>Description: {book.description}</p>
      <img src={book.book_cover} alt="Cover" />
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default BookDetails;