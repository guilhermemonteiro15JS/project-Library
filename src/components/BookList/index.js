import React, { useState, useEffect } from "react";
import BookDetails from "../BookDetails";
//import SearchInput from "./SearchInput";
import { useSearch } from "../../SearchContext";
import "./index.css"

const BookList = () => {
    const{filteredData} = useSearch();;
  const [selectedBook, setSelectedBook] = useState(null);

  /*useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch("http://5.22.217.225:8081/api/v1/book/");
      const result = await response.json();
      console.log(result);

      const booksData = result.data;
      console.log(booksData);

      setData(booksData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }; */

/*   const handleSearch = (inputValue) => {
    // Filtrar os dados com base no valor da entrada de pesquisa
    const filteredBooks = data.filter((book) =>
      book.title.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredData(filteredBooks);
  }; */

  const handleClick = (book) => {
    setSelectedBook(book);
  };

  const handleBackToSearch = () => {
    setSelectedBook(null);
  };

  return (
    <section className="booklist">
    <div className="container">
        
      {selectedBook ? (
        <div className="cursor">
        <BookDetails book={selectedBook} onClose={handleBackToSearch} />
        </div>
      ) : (
        <div>
          {filteredData.map((book, index) => {
            return (
              <ul key={index}>
                <li>
                  <div className="booklist-content grid">
                    <span onClick={() => handleClick(book)}>
                      Title: {book.title}
                    </span>
                    <span>Description: {book.description}</span>
                  </div>
                  <img
                    src={book.book_cover}
                    alt="Cover"
                    onClick={() => handleClick(book)}
                  />
                </li>
              </ul>
            );
          })}
        </div>
      )}
    </div>
    </section>
  );
};

export default BookList;