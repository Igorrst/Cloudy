import styled from "styled-components";

export const Button = styled.button<{ liked: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  svg {
    width: 28px;
    height: 28px;
    opacity: ${(props) => (props.liked ? 1 : 0.8)};
    display: block;
  }

  span {
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray[800]};
  }

  @media (max-width: 480px) {
    right: -40px;
  }
`;
