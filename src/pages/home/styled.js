import styled from "styled-components";
import imagem from "../../assets/Prancheta2.png";

export const StyledBody = styled.body`
display: flex;
`;

export const StyledHome = styled.div`
  background-image: url(${imagem}); // Use "imagem" em vez de "img"
  background-size: auto auto;
  background-position: center;
  flex: 1;
  min-height: 50rem;
`;


export const TextContent = styled.div`
  font-family: cursive;
  text-shadow: 2px 4px 10px blue;
  font-size: 20px;
  line-height: 50px;
`;