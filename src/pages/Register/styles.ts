import styled from 'styled-components';

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0 15px;
`;

export const HeaderContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: 150px;
  height: auto;

  @media (max-width: 768px) {
    width: 120px;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 400px;
  padding: 40px;
  border: 1px solid black;
  border-radius: 20px;
  background-color: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    color: rgb(23, 185, 255);
    margin-bottom: 20px;
    border-bottom: 1px solid black;
  }

  @media (max-width: 1366px) {
    padding: 35px;
    width: 85%;
    max-width: 380px;
  }

  @media (max-width: 1024px) {
    padding: 30px;
    width: 80%;
    max-width: 350px;
  }

  @media (max-width: 768px) {
    padding: 20px;
    width: 90%;
    max-width: 300px;
  }

  @media (max-width: 480px) {
    padding: 15px;
    width: 90%;
    max-width: 280px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
  margin-bottom: 8px;
  
  img {
    position: absolute;
    left: 12px;
    width: 24px;
    height: 24px;
  }
`;

export const InputField = styled.input<{ hasError?: boolean }>`
  flex: 1;
  height: 100%;
  border: 1px solid ${(props) => (props.hasError ? 'red' : '#0079a9')};
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${(props) => (props.hasError ? 'darkred' : '#005f80')};
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.85rem;
  margin-top: -30px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  button {
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 8px;
    transition: transform 0.2s ease;
    cursor: pointer;

    &:hover {
      transform: translateY(-2px);
      background-color: #006b8c;
    }
  }
`;