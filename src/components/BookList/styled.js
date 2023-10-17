import styled from "styled-components";


export const BooksContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 20px;
  justify-content: space-between;
  padding: 15px;
`;


export const BookItem = styled.ul`
  max-width: calc(25% - 10px);
  margin: 15px;
  padding: 15px;
  list-style: none;
  display: grid;
`;

export const DivCont = styled.div`
  display: grid;
  grid-template-columns: 300px 300px 300px 300px;
  align-items: baseline;
  
`;


export const BookCover = styled.img`
  width: 150px;
  height: 200px;
  cursor: pointer;
`;

export const BookTitle = styled.span`

  display: block;
  margin-top: 10px;
  font-weight: bold;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
  color: white;
  max-width: 300px;
  word-break: break-all;
  
`;


export const BookDescription = styled.span`
  font-size: 0.9em;
  margin-top: 5px;
  color: white;
  max-width: 300px;
    word-break: break-all;
`;


