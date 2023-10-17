import React, { useState } from "react";
import BookDetails from "../BookDetails";
//import SearchInput from "./SearchInput";
import { useSearch } from "../../SearchContext";

import {
  BooksContainer,
  BookItem,
  DivCont,
  BookCover,
  BookTitle,
  BookDescription,
} from "./styled";

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
    <BooksContainer>
      {selectedBook ? (
        <BookDetails book={selectedBook} onClose={handleBackToSearch} />
      ) : (
        <DivCont>
          {filteredData.map((book, index) => {
            return (
              <BookItem key={index}>
                <li>
                  <BookCover
                    src={book.book_cover}
                    alt="Cover"
                    onClick={() => handleClick(book)}
                  />
                  <div>
                    <BookTitle onClick={() => handleClick(book)}>
                      Title: {book.title}
                    </BookTitle>
                    <BookDescription>
                      Description: {book.description}
                    </BookDescription>
                  </div>
                </li>
              </BookItem>
            );
          })}
        </DivCont>
      )}
    </BooksContainer>
  );
};

export default BookList;