import styled from 'styled-components';
import backgroundCloudy from '../../assets/background-cloudy.png';

export const SignupContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  z-index: 10;
`;

export const ScreenCloudy = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 25px 100px;
  background-image: url(${backgroundCloudy});
  background-size: cover;
  background-position: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2px;
  top: 8px;
`;

export const ButtonLabel = styled.span`
  font-size: 30px;
  color: #000;
  margin-bottom: 8px;
`;