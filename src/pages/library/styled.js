import styled from "styled-components";
import imagem from "../../assets/Prancheta2.png";

export const StyledBody = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 20px;
`;

export const HeaderTitle = styled.h2`
  font-size: 4.2rem;
  color: #fff;
`;

export const SearchLib = styled.div`
  font-size: 4.2rem;
  color: #fff;
`;

export const ListStyled = styled.div`
  margin-top: 20px; /* Adjust the top margin to make space for the fixed image */
`;

export const FixedImage = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  background-image: url(${imagem});
  opacity: 0.7;
`;