import React from "react";
import { useSearch } from "../../SearchContext";
import { FaSearch } from "react-icons/fa";
import { StyledSearch, StyledForm, StyledFormElem, StyledFormControl, StyledButton} from "./styled";


const SearchTerm = () => {
  const { searchInput, handleSearch } = useSearch();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchInput);
  };

  return (
    <StyledSearch>
      <div className="search-form-content">
        <StyledForm className="search-form" onSubmit={handleSubmit}>
          <StyledFormElem className="search-form-elem flex flex-sb bg-white">
            <StyledFormControl
              className="form-control"
              type="search"
              placeholder="Search here"
              onChange={(e) => handleSearch(e.target.value)}
              value={searchInput}
            />
            <StyledButton
              type="submit"
              onClick={() => handleSearch(searchInput)}
            >
              <FaSearch size={32} />
            </StyledButton>
          </StyledFormElem>
        </StyledForm>
      </div>
    </StyledSearch>
  );
};

export default SearchTerm;
