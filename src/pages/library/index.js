import React from "react";
import SearchTerm from "../../components/SearchTerm";
import BookList from "../../components/BookList";
import { SearchProvider } from "../../SearchContext";
import imagem from "../../assets/Prancheta2.png";
import {
  StyledBody,
  HeaderContent,
  HeaderTitle,
  SearchLib,
  ListStyled,
  FixedImage,
} from "./styled";

const Library = () => {
  return (
    <StyledBody>
      <SearchProvider>
        <FixedImage src={imagem} alt="Background" />

        <header className="header">
          <div className="header-content flex flex-c text-center text-white">
            <HeaderTitle>Find your book</HeaderTitle>
            <SearchLib>
              <SearchTerm />
            </SearchLib>
          </div>
        </header>
        <ListStyled>
          <BookList />
        </ListStyled>
      </SearchProvider>
    </StyledBody>
  );
};

export default Library;
