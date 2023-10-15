import React, { useState, useEffect } from "react";
import BookDetails from "../BookDetails";
//import SearchInput from "./SearchInput";
import { useSearch } from "../../SearchContext";
import "./index.css"

const BookList = () => {
    const{filteredData} = useSearch();;
  const [selectedBook, setSelectedBook] = useState(null);

  const handleClick = (book) => {
    setSelectedBook(book);
  };

  const handleBackToSearch = () => {
    setSelectedBook(null);
  };

  return (
    <div className="books-container">
        
      {selectedBook ? (

        <BookDetails book={selectedBook} onClose={handleBackToSearch} />

      ) : (
        <div className="div-cont">
          {filteredData.map((book, index) => {
            return (
              <ul key={index} className="book-item">
                <li>
                <img
                    src={book.book_cover}
                    alt="Cover"
                    className="book-cover"
                    onClick={() => handleClick(book)}
                  />
                  <div>
                    <span className="book-title" onClick={() => handleClick(book)}>
                      Title: {book.title}
                    </span>
                    <span className="book-description">Description: {book.description}</span>
                  </div>
                </li>
              </ul>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default BookList;