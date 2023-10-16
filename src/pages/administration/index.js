import React, { useState } from "react";

const BookForm = () => {
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

  const getAuthToken = () => {
    const token = localStorage.getItem("authToken");

    return token;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const yearConvert = parseInt(formData.year, 10);
    const token = getAuthToken();
    console.log(token);

    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization", getAuthToken()
    );

    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      title: formData.title,
      description: formData.description,
      year: yearConvert,
      book_cover: formData.book_cover,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/v1/book/", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

    console.log("Dados do livro:", formData);
    // Limpar o formulário após a submissão
    setFormData({
      title: "",
      description: "",
      year: "",
    });
  };

  return (
    <div>
      <h2>Introdução de um Novo Livro</h2>
      <form onSubmit={handleSubmit}>
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
          <label>Image:</label>
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

export default BookForm;
