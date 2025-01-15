import styled from 'styled-components';

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 20px;
    min-height: auto;
  }
`;

export const HeaderContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const LogoImage = styled.img`
  width: 150px;
  height: auto;

  @media (max-width: 768px) {
    width: 120px;
  }

  @media (max-width: 480px) {
    width: 100px;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 300px;
  padding: 10px;
  border: 2px solid black;
  border-radius: 20px;

  @media (max-width: 768px) {
    width: 90%;
    padding: 8px;
  }
`;

export const InputField = styled.input<{ hasError?: boolean }>`
  padding: 10px;
  border: 1px solid ${(props) => (props.hasError ? 'red' : 'black')};
  border-radius: 4px;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.85rem;
  margin-top: -8px;
  margin-bottom: 5px;
`;

export const RegisterButton = styled.button`
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

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;