import styled from "styled-components";

export const BookDetailsContainer = styled.div`
  background-color: #f2f2f2;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  max-width: 500px;
  margin: 0 auto;
`;

export const BookTitle = styled.h2`
  font-size: 24px;
  margin: 10px 0;
  color: black;
`;

export const BookDescription = styled.p`
  font-size: 16px;
  margin: 10px 0;
  color: black;
`;

export const BookCover = styled.img`
  max-width: 100px;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

export const CloseButton = styled.button`
  /* background: none; */
  border: none;
  display: flex;
  justify-items: flex-start;
  cursor: pointer;
  font-size: 25px;
  /* margin-right: 10px; */
`;