import React, { useState } from "react";
import { useSearch } from "../../SearchContext";
import { FaSearch } from "react-icons/fa";
import "./index.css"

const SearchTerm = () => {
  const { searchInput, handleSearch } = useSearch();

  const handleSubmit = (e) => {
    e.preventDefault(); 
    handleSearch(searchInput);
  };

  return (
    <div className="search-form">
      <div className="container">
        <div className="search-form-content">
          <form className="search-form" onSubmit={handleSubmit}>
            <div className="search-form-elem flex flex-sb bg-white">
              <input
                className="form-control"
                type="search"
                placeholder="Search here"
                onChange={(e) => handleSearch(e.target.value)}
                value={searchInput}
              />
              <button type="submit" onClick={() => handleSearch(searchInput)}>
                <FaSearch className="text-purple" size={32} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchTerm;
