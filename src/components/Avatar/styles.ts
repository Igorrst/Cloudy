import styled from "styled-components";

interface AvatarWrapperProps {
  size: number;
}

export const AvatarWrapper = styled.div<AvatarWrapperProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background-color: ${({ theme }) => theme.colors.blue[600]};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.gray[50]};
  font-weight: bold;
  font-size: ${({ size }) => size * 0.45}px;
  cursor: pointer;
  margin-right: 20px;
`;

export const Initials = styled.span`
  user-select: none;
`;
