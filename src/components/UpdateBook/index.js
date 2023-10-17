import React, { useState } from "react";

const UpdateBook = ({ onBookUpdated }) => {
  const [bookID, setBookID] = useState("");
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

  const handleBookUpdate = (event) => {
    event.preventDefault();

    const yearConvert = parseInt(formData.year, 10);

    onBookUpdated(bookID,{
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
    <div>
      <h2>Atualizar um Livro</h2>
      <form onSubmit={handleBookUpdate}>
        <div>
          <label>ID do livro a atualizar:</label>
          <input
            type="text"
            name="ID"
            onChange={(e) => setBookID(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Título:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Descrição:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Ano de Publicação:</label>
          <input
            type="text"
            id="year"
            name="year"
            value={formData.year}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Image:</label>
          <input
            type="text"
            id="image"
            name="book_cover"
            value={formData.book_cover}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit">Atualizar Livro</button>
      </form>
    </div>
  );
};

export default UpdateBook;
