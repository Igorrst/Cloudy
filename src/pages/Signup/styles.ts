import styled from "styled-components";

export const SignupContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  z-index: 10;
  padding: 0 15px;
`;

export const ScreenCloudy = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 25px 100px;
  background: none;
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    padding: 20px 40px;
  }
  @media (max-width: 480px) {
    padding: 15px 20px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  position: relative;

  h2 {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray[900]};
    margin: 0;
    position: relative;
    left: -100px;
    top: -50px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.gray[1000]};

    @media (max-width: 480px) {
      left: 0;
      top: -10px;
      text-align: center;
    }
  }

  h3 {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.gray[700]};
    text-align: center;

    a {
      color: ${({ theme }) => theme.colors.blue[650]};
      text-decoration: none;
      font-weight: bold;
      transition: color 0.3s ease;

      &:hover {
        color: ${({ theme }) => theme.colors.blue[700]};
      }
    }
  }
`;

export const ButtonLabel = styled.span`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.gray[1200]};
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const CloudyBox = styled.div`
  width: 410px;
  height: 400px;
  background-color: ${({ theme }) => theme.colors.blue[50]};
  border-radius: 30px;
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.gray[1000]};

  @media (max-width: 1024px) {
    width: 480px;
    height: 380px;
  }

  @media (max-width: 768px) {
    width: 400px;
    height: 320px;
  }

  @media (max-width: 480px) {
    width: 320px;
    height: 280px;
  }
`;
