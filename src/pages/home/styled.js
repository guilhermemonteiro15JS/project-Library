/* import styled from "styled-components";
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
`; */

import styled, { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
  color: #333;
  font-family: 'Arial', sans-serif;
`;

export const ConstructionText = styled.h1`
  font-size: 2em;
  text-align: center;
  animation: ${fadeIn} 2s ease-in-out infinite; 
  `;