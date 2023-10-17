import React, { useState } from "react";

const DeleteBook = ({ onDeleteBook }) => {
  const [bookID, setBookID] = useState("");

  const handleBookDelete = (event) => {
    event.preventDefault();

    onDeleteBook(bookID);

    setBookID("");
  };

  return (
    <div>
      <h2>Apagar Livro</h2>
      <form onSubmit={handleBookDelete}>
        <div>
          <label>ID do livro a remover:</label>
          <input
            type="text"
            name="ID"
            value={bookID}
            onChange={(e) => setBookID(e.target.value)}
            required
          />
        </div>

        <button type="submit">Remover Livro</button>
      </form>
    </div>
  );
};

export default DeleteBook;