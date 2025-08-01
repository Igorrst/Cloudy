import styled from "styled-components";

export const UserIcon = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.gray[1000]};
  cursor: pointer;
`;
