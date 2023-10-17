import styled from "styled-components";
import imagem from "../../assets/3DBooks.jpeg";

export const SigninStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const ImageContainer = styled.div`
  text-align: center; /* Centraliza horizontalmente */
  padding-right: 2rem;
  
`;

export const Image = styled.img`
  max-width: 450px;
  /* height: 350px;
  max-width: 500px; */
  height: auto;
`;

export const FormContainer = styled.div`
  margin-top: 10px;
  font-size: 20px;
  /* display: flex; */
  justify-content: center;
  flex: 0;
  text-align: center;
`;

export const SignInTitle = styled.h1 `
  font-size: 24px;
  margin-bottom: 10px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  text-align: left;
  max-width: 300px;
`;

export const FormGroup = styled.div`
  /* margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: flex-start; */
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Label = styled.label`
  /* font-weight: 1;
  margin-top: 10px;
  font-size: 20px;
  text-align: left; */
  font-weight: 1;
  margin-top: 10px;
  font-size: 20px;
  text-align: left; 
`;

export const Label2 = styled.label`
  /* font-weight: 1;
  margin-top: 10px;
  font-size: 20px;
  text-align: left; */
  font-weight: 1;
  margin-top: 10px;
  font-size: 10px;
  
`;
  

export const Input = styled.input`
  /* padding: 10px;
  margin-top: 5px;
  margin-left: 10px;
  display: block;
  align-items: center;
  justify-content: center;
  text-align: left; */
  padding: 10px;
  margin-top: 5px;
  display: block;
  text-align: left;

`;

export const Button = styled.button`
  border-radius: 20px;
  background-color: #30a9d9;
  color: #fff;
  padding: 18px 30px;
  font-size: 20px;
  outline: none;
  cursor: pointer;
  border: none;
  display: flex;
  justify-content: center
  
`;