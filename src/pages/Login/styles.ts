import styled from 'styled-components';

export const LogoImage = styled.img`
  width: 150px;
  height: auto;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 300px;
  padding: 10px;
  border: 2px solid black;
  border-radius: 20px;
`;

export const InputField = styled.input<{ hasError?: boolean }>`
  padding: 10px;
  border: 1px solid black;
  border-radius: 4px;
  font-size: 16px;
`;

export const LoginButton = styled.button`
  padding: 10px;
  background-color: #016b99;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #014f73;
  }
`;