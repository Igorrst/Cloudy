import styled from 'styled-components';

export const PrimaryButton = styled.button`
  background-color: #016b99;
  color: #fff;
  padding: 20px 120px;
  font-size: 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  margin-bottom: 22px;

  &:hover {
    background-color: #007bbd;
    transform: scale(1.05);
    transition: all 0.3s ease;
  }
`;