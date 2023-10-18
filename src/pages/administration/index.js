import React, { useState, useEffect } from "react";
import AddBook from "../../components/AddBook";
import DeleteBook from "../../components/DeleteBook";
import UpdateBook from "../../components/UpdateBook";
import UpdateUser from "../../components/UpdateProfile";

import {
  Container,
  UserInfoContainer,
  UserName,
  Email,
  ProfileImage,
  Button,
} from "./styled";

const Administration = () => {
  const [isClicked, setIsClicked] = useState(false);

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

  const handleBookUpdate = (bookID, updateData) => {
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

  const handleUserUpdate = async (updatedUserData) => {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", getUserInfo("token"));
    myHeaders.append("Content-Type", "application/json");

    let requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: JSON.stringify(updatedUserData),
      redirect: "follow",
    };
    let response;
    try {
      response = await fetch("/api/v1/user/profile", requestOptions);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    if (response?.ok) {
      const data = await response.json();

      localStorage.setItem("userData", JSON.stringify(data.data));
      console.log(data.data);
    } else {
      console.log(`HTTP Response Code: ${response?.status}`);
    }

    /* fetch("/api/v1/user/profile", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
 */
  };

  useEffect(() => {
    getUserInfo();
  }, [isClicked]);

  return (
    <div>
      <Container>
        <UserInfoContainer>
          <ProfileImage src={getUserInfo("profile_picture")} alt="User" />
          <UserName>User Name: {getUserInfo("name")}</UserName>
          <Email>Email: {getUserInfo("email")}</Email>
          <Button onClick={() => setIsClicked(!isClicked)}>
            Atualizar perfil
          </Button>
        </UserInfoContainer>

        {isClicked && <UpdateUser onUpdateUser={handleUserUpdate} />}
      </Container>

      <AddBook onBookAdded={handleBookCreate} />

      <DeleteBook onDeleteBook={handleBookDelete} />

      <UpdateBook onBookUpdated={handleBookUpdate} />
    </div>
  );
};

export default Administration;
