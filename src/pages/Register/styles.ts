import styled from "styled-components";

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0 15px;

  @media (max-width: 640px) {
    padding: 0 12px;
  }
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

  @media (max-width: 640px) {
    width: 100px;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 400px;
  padding: 40px;
  border: 1px solid ${({ theme }) => theme.colors.gray[1000]};
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.gray[50]};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    color: ${({ theme }) => theme.colors.blue[600]};
    margin-bottom: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[1000]};
  }

  input,
  textarea,
  select,
  button {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid ${({ theme }) => theme.colors.gray[600]};
    border-radius: 5px;
    box-sizing: border-box;
  }

  button {
    background-color: ${({ theme }) => theme.colors.blue[600]};
    color: ${({ theme }) => theme.colors.gray[50]};
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.blue[600]};
    }
  }

  @media (max-width: 1280px) {
    padding: 35px;
    width: 85%;
    max-width: 380px;
  }

  @media (max-width: 1024px) {
    padding: 30px;
    width: 80%;
    max-width: 350px;

    h2 {
      font-size: 22px;
    }
  }

  @media (max-width: 768px) {
    padding: 20px;
    width: 90%;
    max-width: 100%;

    h2 {
      font-size: 20px;
      margin-bottom: 16px;
    }

    input,
    textarea,
    select,
    button {
      font-size: 15px;
      padding: 9px;
    }
  }

  @media (max-width: 640px) {
    padding: 16px;
    width: 95%;

    h2 {
      font-size: 18px;
      margin-bottom: 14px;
    }

    input,
    textarea,
    select,
    button {
      font-size: 14px;
      padding: 8px;
    }
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
  margin-bottom: 8px;
`;

export const InputField = styled.input<{ hasError?: boolean }>`
  flex: 1;
  height: 100%;
  border: 1px solid
    ${({ theme, hasError }) =>
      hasError ? theme.colors.red[500] : theme.colors.blue[850]};
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${({ theme, hasError }) =>
      hasError ? theme.colors.red[700] : theme.colors.blue[950]};
  }

  @media (max-width: 640px) {
    font-size: 14px;
    height: 42px;
  }
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.red[500]};
  font-size: 0.85rem;
  margin-top: -30px;

  @media (max-width: 640px) {
    font-size: 0.75rem;
    margin-top: -28px;
  }
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
      background-color: ${({ theme }) => theme.colors.blue[650]};
    }

    @media (max-width: 768px) {
      font-size: 14px;
      padding: 8px 16px;
    }

    @media (max-width: 640px) {
      font-size: 13px;
      padding: 8px 14px;
    }
  }
`;
