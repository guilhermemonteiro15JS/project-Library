import React from "react";
import styled from "styled-components";
import imagem from "../../assets/kidslibrary.jpeg";

const StyledHome = styled.div`
  background-image: url(${imagem}); // Use "imagem" em vez de "img"
  background-size: center;
  background-repeat: no-repeat;
  width: 1;
  height: 1;
  min-height: 50rem;
  padding: 50px;
`;

const Home = () => {
  return (
    <StyledHome>
      <div> </div>
    </StyledHome>
  );
};

export default Home;
