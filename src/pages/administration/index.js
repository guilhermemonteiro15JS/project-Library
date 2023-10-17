import React, { useState } from "react";
import AddBook from "../../components/AddBook";
import DeleteBook from "../../components/DeleteBook";
import UpdateBook from "../../components/UpdateBook";
import UpdateUser from "../../components/UpdateProfile";

import {
  BodyReg,
  RegistrationStyled,
  FormContainer,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  RegistrationForm,
  StyledH2,
} from "./styled";

const Administration = () => {
  const[isClicked, setIsClicked] = useState(false);

  const getUserInfo = (value) => {
    const dataString = localStorage.getItem("userData");
    const userData = JSON.parse(dataString);
  

    if (value) {
      return userData[value];
    } else {
      return userData;
    }
  };

  const handleBookCreate = (newBookData) => {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", getUserInfo("token"));

    myHeaders.append("Content-Type", "application/json");
    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(newBookData),
      redirect: "follow",
    };

    fetch("/api/v1/book/", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

  };

  const handleBookDelete = (bookID) => {

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

  const handleBookUpdate = (bookID, updateData)=> {


    let myHeaders = new Headers();
    myHeaders.append("Authorization", getUserInfo("token"));
    myHeaders.append("Content-Type", "application/json");


    let requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: JSON.stringify(updateData),
      redirect: "follow",
    };

    fetch(`/api/v1/book/${bookID}`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }; 

  const handleUserUpdate= (updatedUserData) =>{
   
    let myHeaders = new Headers();
    myHeaders.append("Authorization", getUserInfo("token"));
    myHeaders.append("Content-Type", "application/json");
    
    
    let requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: JSON.stringify(updatedUserData),
      redirect: 'follow'
    };
    
    fetch("/api/v1/user/profile", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

  }

  return (
    
    <BodyReg>
    <div>
      <div>
        <p>User Name: {getUserInfo("name")}</p>
        <p>Email: {getUserInfo("email")}</p>
        <p>
          <img src={getUserInfo("profile_picture")} alt="User" />
        </p>
        <button onClick={()=>setIsClicked(!isClicked ? true : false)}>Atualizar profile</button>
      </div>
      <div>      {isClicked ?(
        <UpdateUser onUpdateUser={handleUserUpdate}/>
      ): ('')}
      </div>
      <div>
      <AddBook onBookAdded={handleBookCreate} />
      </div>

     <div>
        <DeleteBook onDeleteBook={handleBookDelete} />
        </div>
        <div>
          <UpdateBook onBookUpdated={handleBookUpdate}/>
        </div>
    </div>
      <RegistrationStyled>
        <FormContainer>
          <StyledH2>
            <h2>Introdução de um Novo Livro</h2>
          </StyledH2>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Título:</Label>
              <Input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Descrição:</Label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Ano de Publicação:</Label>
              <Input
                type="text"
                id="year"
                name="year"
                value={formData.year}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Image:</Label>
              <Input
                type="text"
                id="image"
                name="book_cover"
                value={formData.book_cover}
                onChange={handleInputChange}
              />
            </FormGroup>
            <Button type="submit">Adicionar Livro</Button>
          </form>
        </FormContainer>
      </RegistrationStyled>
    </BodyReg>
  );
};

export default Administration;
