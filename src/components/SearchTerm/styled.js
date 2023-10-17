import styled from "styled-components";

export const StyledSearch = styled.div`
  width: 100%;
  max-width: 680px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

export const StyledForm = styled.form`
  padding: 0px;
  display: flex;
  justify-content: center;
`;

export const StyledFormElem = styled.div`
  padding: 0px 80px;
  border-radius: 3.8rem;
  display: flex;
  /* justify-content: space-between; */
  background-color: white;
  align-items: center;
`;

export const StyledFormControl = styled.input`
  font-size: 25px;
  padding: 0.1px;
  border: none;
  &::placeholder {
    opacity: 0.3;
  }
`;

export const StyledButton = styled.button`
  outline: 0;
  border: none;
  font-family: inherit;
  background-color: transparent;
  cursor: pointer;
`;
