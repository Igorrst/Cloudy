import styled from 'styled-components';

export const PrimaryButton = styled.button`
  background-color: rgb(23, 185, 255);
  color: #fff;
  padding: 20px 120px;
  font-size: 16px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  margin-bottom: 22px;

  width: 320px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #007bbd;
    transform: scale(1.05);
    transition: all 0.3s ease;
  }

      @media (max-width: 480px) {
      width: 280px;
    }
  }
`;