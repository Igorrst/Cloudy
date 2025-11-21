import styled from "styled-components";

interface AvatarWrapperProps {
  size: number;
}

export const AvatarWrapper = styled.div<AvatarWrapperProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background-color: ${({ theme }) => theme.colors.blue[600]};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.gray[50]};
  font-weight: bold;
  font-size: ${({ size }) => size * 0.45}px;
  cursor: pointer;
  margin-right: 20px;
  flex-shrink: 0;
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    margin-right: 16px;
    border-radius: 10px;
  }

  @media (max-width: 640px) {
    margin-right: 12px;
    border-radius: 8px;
  }
`;

export const Initials = styled.span`
  user-select: none;
  z-index: 1;
`;

export const AvatarImage = styled.img<{ size: number }>`
  width: 100%;
  height: 100%;
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
  object-position: center center;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
