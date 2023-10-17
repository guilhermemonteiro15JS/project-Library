import React, { useState } from "react";

const UpdateUser = ({ onUpdateUser }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    profile_picture: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUserUpdate = (event) => {
    event.preventDefault();

    onUpdateUser(formData);

    setFormData({
      name: "",
      email: "",
      profile_picture: "",
    });
  };

  return (
    <div>
      <h2>Atualizar Dados do Utilizador</h2>
      <form onSubmit={handleUserUpdate}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Foto de Perfil:</label>
          <input
            type="text"
            name="profile_picture"
            value={formData.profile_picture}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit">Atualizar Dados</button>
      </form>
    </div>
  );
};

export default UpdateUser;