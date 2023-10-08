import React from "react";
import "./library.css";
import Search from "../search";

const Library = () => {
  return (
      <header classname="library-header">
        <i className="fas fa-book fa-2x"></i>
        <h1 className="library-title" ><i class="bi bi-book"></i>Books from Library</h1>
        <div >
          <p><Search /></p>
        </div>
      </header>
  );
};

export default Library;
