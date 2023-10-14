import React from "react";
import "./library.css";
import SearchTerm from "../../components/SearchTerm";
import BookList from "../../components/BookList"
import { SearchProvider } from "../../SearchContext";

const Library = () => {
  return (
    <SearchProvider>
          <div className="holder">
      <header className="header">
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize"> Find your book</h2>
          <SearchTerm/>
        </div>
      </header>
      <div >
      <BookList />
        </div>
      </div>
      </SearchProvider>

  );
};

export default Library;
