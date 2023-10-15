import React from "react";
import styled from "styled-components";
import imagem from "../../assets/kidslibrary.jpeg";

const StyledBody = styled.body`
    display: flex;
`;

const StyledHome = styled.div`
  background-image: url(${imagem}); // Use "imagem" em vez de "img"
  /* background-size: center;
  background-repeat: no-repeat;
  width: 1;
  height: 1;
  min-height: 50rem;
  padding: 50px; */
  background-size: cover;
  background-repeat: no-repeat;
  flex: 1;
  min-height: 50rem;
`;

const StyledText = styled.text`
  /* align-self: center;
  font-family: cursive;
  text-shadow: 2px 4px 10px blue;
  font-size: x-large; */
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding: 50px;
`;

const TextContent = styled.div`
  font-family: cursive;
  text-shadow: 2px 4px 10px blue;
  font-size: 20px;
  line-height: 50px;
`;

const Home = () => {
  return (
    <StyledBody>
      <StyledHome>
        <div> </div>
      </StyledHome>
      <StyledText>
        <TextContent>
          "Explore um mundo de conhecimento e literatura em nossa Biblioteca
          Online. Encontre livros de todos os gêneros e autores, adicione-os à
          sua estante virtual e organize sua leitura. Bem-vindo à nossa
          biblioteca digital!"
        </TextContent>
      </StyledText>
    </StyledBody>
  );
};

export default Home;
