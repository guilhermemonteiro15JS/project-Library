import React, { useState, useEffect } from "react";
import BookDetails from "../BookDetails";

const SearchForm = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [data, setData] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
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
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);

    // Filtrar os dados com base no valor da entrada de pesquisa
    const filteredBooks = data.filter((book) =>
      book.title.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredData(filteredBooks);
  };

const handleClick = (book) =>{
    setSelectedBook(book);
}

const handleBackToSearch = () => {
    setSelectedBook(null);
  };



  return (
    <div>
      {selectedBook ? (
        <BookDetails book={selectedBook} onClose={handleBackToSearch}/>
      ) : (
        <div>
                 <input
        type="search"
        placeholder="Search here"
        onChange={(e) => handleChange(e)}
        value={searchInput}
      />
      <button onClick={(e) => handleChange(e)}>Search</button> 
        {filteredData.map((book, index) => {
          return (
            <ul key={index}>
              <li>
                <div>
                  <span onClick={()=> handleClick(book)} >
                    Title: {book.title}</span>
                  <span>Description; {book.description}</span>
                </div>
                <img src={book.book_cover} alt="Cover" onClick={()=> handleClick(book)}/>
              </li>
            </ul>
          );
        })}
      </div>
      )}
     
    </div>
  );
};

export default SearchForm;
