import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const UserInfoContainer = styled.div`
  text-align: center;
`;

export const UserName = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const Email = styled.p`
  font-size: 16px;
`;

export const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
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

  transition: background-color 0.3s;

  &:hover {
    background-color: #007bff;
  }
`;