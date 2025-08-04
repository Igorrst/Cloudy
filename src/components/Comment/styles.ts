import styled from "styled-components";

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 28px;
    height: 28px;
    color: ${({ theme }) => theme.colors.gray[900]};
    opacity: 0.85;
  }

  &:hover svg {
    opacity: 1;
  }
`;
