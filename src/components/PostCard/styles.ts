import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 280px;
  border-radius: 40px;
  background-color: ${({ theme }) => theme.colors.blue[100]};
  padding: 24px;
  padding-bottom: 80px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  overflow: hidden;

  @media (max-width: 1024px) {
    border-radius: 32px;
    padding: 22px;
    padding-bottom: 75px;
  }

  @media (max-width: 768px) {
    min-height: 320px;
    padding: 20px;
    padding-bottom: 70px;
    border-radius: 28px;
  }

  @media (max-width: 640px) {
    min-height: 280px;
    padding: 16px;
    padding-bottom: 60px;
    border-radius: 24px;
  }
`;

export const PostActions = styled.div`
  position: absolute;
  right: 24px;
  bottom: 24px;
  display: flex;
  align-items: center;
  gap: 20px;
  z-index: 5;

  @media (max-width: 768px) {
    right: 20px;
    bottom: 20px;
    gap: 16px;
  }

  @media (max-width: 640px) {
    right: 16px;
    bottom: 16px;
    gap: 12px;
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
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 15px;
    padding: 0 16px;
  }

  @media (max-width: 640px) {
    font-size: 14px;
    padding: 0 12px;
  }
`;

export const UserPostInfo = styled.div`
  position: absolute;
  left: 24px;
  bottom: 24px;
  display: flex;
  align-items: center;
  font-size: 13px;
  z-index: 5;


  h3 {
    margin: 0;
    font-weight: 500;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray[900]};
  }

  @media (max-width: 768px) {
    left: 20px;
    bottom: 20px;
    font-size: 12px;

    h3 {
      font-size: 13px;
    }
  }

  @media (max-width: 640px) {
    left: 16px;
    bottom: 16px;
    font-size: 11px;

    h3 {
      font-size: 12px;
    }
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
  z-index: 1;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[200]};
  }

  @media (max-width: 640px) {
    top: 16px;
    right: 16px;
    padding: 3px;

    svg {
      width: 18px;
      height: 18px;
    }
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
  z-index: 100;
  overflow: hidden;

  @media (max-width: 640px) {
    top: 40px;
    right: 16px;
    min-width: 130px;
    border-radius: 10px;
  }
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

  @media (max-width: 640px) {
    padding: 10px 14px;
    font-size: 13px;
    gap: 6px;

    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

export const LikesModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  z-index: 20000;
`;

export const LikesModalContent = styled.div`
  background: ${({ theme }) => theme.colors.blue[50]};
  border-radius: 16px;
  width: 100%;
  max-width: 360px;
  max-height: 70vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  overflow: hidden;

  body.night-mode & {
    background: ${({ theme }) => theme.colors.gray[900]};
  }
`;

export const LikesModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.blue[200]};

  strong {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.gray[1000]};

    body.night-mode & {
      color: ${({ theme }) => theme.colors.gray[50]};
    }
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.gray[800]};
    padding: 4px;
    border-radius: 50%;
    transition: background 0.2s;

    body.night-mode & {
      color: ${({ theme }) => theme.colors.gray[200]};
    }

    &:hover {
      background: ${({ theme }) => theme.colors.blue[100]};

      body.night-mode & {
        background: ${({ theme }) => theme.colors.gray[800]};
      }
    }
  }
`;

export const LikesList = styled.div`
  padding: 8px 0;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.blue[300]};
    border-radius: 999px;
  }
`;

export const LikeUserItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.blue[100]};

    body.night-mode & {
      background: ${({ theme }) => theme.colors.gray[800]};
    }
  }

  div {
    display: flex;
    flex-direction: column;

    strong {
      font-size: 15px;
      color: ${({ theme }) => theme.colors.gray[1000]};

      body.night-mode & {
        color: ${({ theme }) => theme.colors.gray[50]};
      }
    }

    span {
      font-size: 12px;
      color: ${({ theme }) => theme.colors.gray[600]};

      body.night-mode & {
        color: ${({ theme }) => theme.colors.gray[400]};
      }
    }
  }
`;

export const LikesEmptyState = styled.div`
  padding: 32px 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray[600]};

  body.night-mode & {
    color: ${({ theme }) => theme.colors.gray[400]};
  }
`;