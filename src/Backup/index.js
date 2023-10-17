import React, { useState } from "react";

const Administration = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    year: "",
    book_cover: "",
  });
  const [bookID, setBookID] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const getUserInfo = (value) => {
    const dataString = localStorage.getItem("userData");
    const userData = JSON.parse(dataString);

    if (value) {
      return userData[value];
    } else {
      return userData;
    }
  };

  const handleBookCreate = (event) => {
    event.preventDefault();

    const yearConvert = parseInt(formData.year, 10);

    var myHeaders = new Headers();
    myHeaders.append("Authorization", getUserInfo("token"));

    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
      title: formData.title,
      description: formData.description,
      year: yearConvert,
      book_cover: formData.book_cover,
    });

    let requestOptions = {
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
    setFormData({
      title: "",
      description: "",
      year: "",
    });
  };

  const handleBookDelete = (event) => {
    event.preventDefault();

    let myHeaders = new Headers();
    myHeaders.append("Authorization", getUserInfo("token"));

    let requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`/api/v1/book/${bookID}`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const handleBookUpdate = (event) => {
    event.preventDefault();

    const yearConvert = parseInt(formData.year, 10);

    let myHeaders = new Headers();
    myHeaders.append("Authorization", getUserInfo("token"));
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
      title: formData.title,
      description: formData.description,
      year: yearConvert,
      book_cover: formData.book_cover,
    });

    let requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`/api/v1/book/${bookID}`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <div>
      <div>
        <p>User Name: {getUserInfo("name")}</p>
        <p>Email: {getUserInfo("email")}</p>
        <p>
          <img src={getUserInfo("profile_picture")} alt="User" />
        </p>
      </div>
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

      <div>
        <h2>Apagar Livros</h2>
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
    </div>
  );
};

export default Administration;
