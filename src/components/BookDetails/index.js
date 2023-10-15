import React from "react";
import {AiFillCloseCircle} from 'react-icons/ai'



const BookDetails = ({ book, onClose }) => {
  const teste= `http://5.22.217.225:8081/api/v1/book/${book.id}`
  console.log(teste);

  const deleteBook= async (e) =>{
    const response = await fetch(`http://5.22.217.225:8081/api/v1/book/${book.id}`, {
      method:'DELETE',
      headers:{
        'Content-Type': 'application/json',
        'Authorization':'Bearer "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNTI0IiwiZXhwIjoxNjgyODA4NTE2LCJpYXQiOjE2ODI4MDc2MTYsImlzcyI6Imlzc3Vlcl9kZXNpZ25hdGlvbiJ9.Ivw72PAMoGGmZo0i9ja9qYh9bL3jYJgO8hbUcUhe80A"'
      },
      body:"none"

    });
   const data = await response.json();

    console.log("O livro:", data)
  }



  return (
    <div>
      <h2>{book.title}</h2>
      <p>Description: {book.description}</p>
      <img src={book.book_cover} alt="Cover" />
      <button onClick={onClose}>
      <AiFillCloseCircle size={32}/>
      </button>
      <button onClick={(e)=>deleteBook(e)}>
      <AiFillCloseCircle size={32}/>
      </button>
    </div>
  );
};

export default BookDetails;