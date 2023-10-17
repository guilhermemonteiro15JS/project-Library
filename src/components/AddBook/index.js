import React, { useState } from "react";

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
    <div>
      <h2>Introdução de um Novo Livro</h2>
      <form onSubmit={handleBookCreate}>
        <div>
          <label>Título:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>Descrição:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
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
            required
          />
        </div>
        <div>
          <label>Imagem:</label>
          <input
            type="text"
            id="image"
            name="book_cover"
            value={formData.book_cover}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit">Adicionar Livro</button>
      </form>
    </div>
  );
};


export default AddBook;