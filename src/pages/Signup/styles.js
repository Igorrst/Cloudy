import styled from 'styled-components';
import backgroundImage from '../../assets/background-day.png';
import backgroundCloudy from '../../assets/background-cloudy.png';

export const SignupContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
`;

export const ScreenCloudy = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 100px 250px;
  background-image: url(${backgroundCloudy});
  background-size: cover;
  background-position: center;
`;

export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 150px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const ButtonLabel = styled.span`
  font-size: 30px;
  color: #000;
  margin-bottom: 8px;
`;