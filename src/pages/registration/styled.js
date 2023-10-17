import styled from "styled-components";
import imagem from "../../assets/Prancheta3.png";

export const BodyReg = styled.body`
  min-height: 100vh;
  background-image: url(${imagem});
  justify-items: center;
  background-size: cover;
`;

export const RegistrationStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const ImageContainer = styled.div`
  text-align: center;
  flex: 1;
  padding: 2rem;
`;

export const Image = styled.img`
  max-width: 350px;
  height: 350px;
`;

export const FormContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 250px;
  margin-top: 100px;
  color: white;
`;

export const Form = styled.form`
  /* display: flex;
  flex-direction: column;
  margin: 20px; */
  display: flex;
  flex-direction: column;
  align-content: flex-end;
`;

export const FormGroup = styled.div`
  /* margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center; */
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const Label = styled.label`
  font-weight: 1;
  margin-right: 10px;
`;

export const Input = styled.input`
  padding: 10px;
  margin-top: 5px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
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
`;