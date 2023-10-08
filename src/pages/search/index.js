import React, { useState } from "react";
import { FormControl, Button } from "react-bootstrap";
import data from "./data";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);

    // Filtrar os dados com base no valor da entrada de pesquisa
    const filteredBooks = data[0].data.filter((book) =>
      book.title.toLowerCase().includes(inputValue.toLowerCase())
    );

    // Armazenar os dados filtrados no estado
    setFilteredData(filteredBooks);
  };

  return (
    <div>
      <input
        type="search"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
      />

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((book, index) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.year}</td>
              <td>{book.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Search;



//   <div className="search-container ml-auto">
//   <div className="input-group">
//     <FormControl
//       type="text"
//       placeholder="Search"
//       className="mr-sm-2"
//     />
//     <div className="input-group-append">
//       <Button variant="outline-info" className="custom-button">
//         <span className="bi bi-search"></span>
//       </Button>
//     </div>
//   </div>
// </div>
