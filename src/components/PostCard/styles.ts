import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 200px;
  border-radius: 40px;
  background-color: ${({ theme }) => theme.colors.blue[100]};
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: 350px;
  }

  @media (max-width: 480px) {
    min-height: 300px;
    padding: 15px;
  }
`;

export const PostActions = styled.div`
  position: absolute;
  right: 100px;
  bottom: 10px;
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 480px) {
    right: 10px;
    gap: 15px;
  }
`;

export const PostContent = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray[900]};
  word-break: break-word;
  white-space: pre-wrap;
  text-align: center;
  padding: 0 20px;
  max-width: 100%;
`;

export const UserPostInfo = styled.div`
  position: absolute;
  left: 20px;
  bottom: 20px;
  display: flex;
  align-items: center;
  font-size: 13px;

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    opacity: 0.85;
    margin-right: 10px;
  }

  h3 {
    margin: 0;
    font-weight: normal;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    left: 10px;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 15px;
`;

export const OptionsButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.gray[800]};
  transition: background-color 0.2s ease;
  z-index: 10;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[200]};
  }
`;

export const OptionsModal = styled(motion.div)`
  position: absolute;
  top: 45px;
  right: 20px;
  background-color: ${({ theme }) => theme.colors.blue[100]};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  min-width: 150px;
  z-index: 1000;
  overflow: hidden;
`;

export const OptionItem = styled.div<{ delete?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  color: ${({ theme, delete: isDelete }) => isDelete ? theme.colors.red[500] : theme.colors.gray[1000]};
  font-size: 14px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue[200]};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;