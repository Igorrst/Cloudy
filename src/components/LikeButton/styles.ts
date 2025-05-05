import styled from "styled-components";

export const Button = styled.button<{ liked: boolean }>`
  position: absolute;
  right: -50px;
  top: 45%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;

  img {
    width: 30px;
    height: 30px;
    opacity: ${(props) => (props.liked ? 1 : 0.8)};
  }

  @media (max-width: 480px) {
    right: -40px;
  }
`;
