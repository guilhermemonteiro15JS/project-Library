import React, { useState, useEffect } from "react";
import { FormControl, Button } from "react-bootstrap";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try{
    const response = await fetch("http://5.22.217.225:8081/api/v1/book/");
    const result = await response.json();
    console.log(result);

    const booksData = result.data;
    console.log(booksData);

    setData(booksData);
    }catch (error){
      console.error("Error fetching data:", error);
    }
  };

   const handleChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);

    // Filtrar os dados com base no valor da entrada de pesquisa
      const filteredBooks = data.filter((book) =>
      book.title.toLowerCase().includes(inputValue.toLowerCase())
      )
    setFilteredData(filteredBooks); 
    /* else {
      setFilteredData([]);
    } */

  };
  
  return (
    <div>
      <input
        type="search"
        placeholder="Search here"
        onChange={(e) => handleChange(e)}
        value={searchInput}
      />
<button onClick={(e) => handleChange(e)}>Search</button>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Description</th>
            <th>
              Cover
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((book, index) => (
            <tr key={index}>
              <td>{book.title}</td>
              <td>{book.year}</td>
              <td>{book.description}</td>
              <td>
                <img src={book.book_cover}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Search;
