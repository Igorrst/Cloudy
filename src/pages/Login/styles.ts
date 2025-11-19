import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0 15px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }

  @media (max-width: 640px) {
    padding: 0 16px;
  }
`;

export const HeaderContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 150px;
    height: auto;

    @media (max-width: 768px) {
      width: 120px;
    }

    @media (max-width: 640px) {
      width: 100px;
    }
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 380px;
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

  @media (max-width: 768px) {
    padding: 30px;
    max-width: 350px;

    h2 {
      font-size: 22px;
    }
  }

  @media (max-width: 640px) {
    padding: 20px;
    max-width: 100%;

    h2 {
      font-size: 20px;
      margin-bottom: 16px;
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

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 640px) {
    font-size: 13px;
    height: 42px;
  }
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.red[500]};
  font-size: 0.85rem;
  margin-top: -30px;

  @media (max-width: 640px) {
    font-size: 0.75rem;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  max-width: 380px;
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
    width: 100%;

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
