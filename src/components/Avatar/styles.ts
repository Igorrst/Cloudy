import styled from "styled-components";

export const AvatarWrapper = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.blue[600]};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.gray[50]};
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  margin-right: 20px;
`;

export const Initials = styled.span`
  user-select: none;
`;
