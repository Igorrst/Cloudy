import styled from "styled-components";

export const Button = styled.button<{ hasComments: boolean }>`
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
    opacity: ${(props) => (props.hasComments ? 1 : 0.8)};
    display: block;
  }

  span {
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray[800]};
  }

  &:hover svg {
    opacity: 1;
  }

  @media (max-width: 640px) {
    gap: 4px;

    svg {
      width: 24px;
      height: 24px;
    }

    span {
      font-size: 12px;
    }
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20000;
  padding: 20px;

  @media (max-width: 640px) {
    padding: 12px;
  }
`;

export const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.colors.blue[100]};
  border-radius: 20px;
  width: 100%;
  max-width: 600px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  z-index: 20001;
  position: relative;

  @media (max-width: 768px) {
    max-width: 95%;
    max-height: 85vh;
    border-radius: 16px;
  }

  @media (max-width: 640px) {
    max-width: 100%;
    max-height: 90vh;
    border-radius: 12px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[300]};

  h3 {
    margin: 0;
    font-size: 20px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.gray[1000]};
  }

  @media (max-width: 768px) {
    padding: 16px 20px;
  }

  @media (max-width: 640px) {
    padding: 12px 16px;

    h3 {
      font-size: 18px;
    }
  }
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 50%;
  transition: background-color 0.2s ease;
  color: ${({ theme }) => theme.colors.gray[800]};

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[200]};
  }

  @media (max-width: 640px) {
    padding: 3px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

export const CommentsList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.gray[400]};
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.gray[500]};
  }

  @media (max-width: 768px) {
    padding: 12px 20px;
    gap: 14px;
  }

  @media (max-width: 640px) {
    padding: 10px 16px;
    gap: 12px;
  }
`;

export const CommentItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.blue[150]};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue[200]};
  }

  @media (max-width: 640px) {
    padding: 10px;
    gap: 6px;
    border-radius: 10px;
  }
`;

export const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  flex-wrap: wrap;

  strong {
    font-size: 14px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray[1000]};

    @media (max-width: 640px) {
      font-size: 13px;
    }
  }
`;

export const CommentContent = styled.p`
  margin: 0;
  padding-left: 44px;
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.gray[900]};
  word-break: break-word;

  @media (max-width: 640px) {
    padding-left: 36px;
    font-size: 13px;
    line-height: 1.4;
  }
`;

export const CommentTime = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray[600]};
  margin-left: 8px;

  @media (max-width: 640px) {
    font-size: 11px;
    margin-left: 6px;
  }
`;

export const CommentInputContainer = styled.div`
  display: flex;
  gap: 12px;
  padding: 16px 24px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray[300]};
  background-color: ${({ theme }) => theme.colors.blue[100]};

  @media (max-width: 768px) {
    padding: 12px 20px;
    gap: 10px;
  }

  @media (max-width: 640px) {
    padding: 10px 16px;
    gap: 8px;
  }
`;

export const CommentInput = styled.textarea`
  flex: 1;
  padding: 12px 16px;
  border: 2px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 12px;
  font-size: 14px;
  font-family: inherit;
  resize: none;
  outline: none;
  background-color: ${({ theme }) => theme.colors.blue[150]};
  color: ${({ theme }) => theme.colors.gray[1000]};
  min-height: 50px;
  max-height: 120px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[600]};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.blue[650]};
  }

  @media (max-width: 768px) {
    padding: 10px 14px;
    font-size: 13px;
    border-radius: 10px;
    min-height: 45px;
  }

  @media (max-width: 640px) {
    padding: 8px 12px;
    font-size: 12px;
    border-radius: 8px;
    min-height: 40px;
    max-height: 100px;
  }
`;

export const SendButton = styled.button`
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.colors.blue[650]};
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease;
  white-space: nowrap;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.blue[750]};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray[400]};
    cursor: not-allowed;
    opacity: 0.6;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 13px;
    border-radius: 10px;
  }

  @media (max-width: 640px) {
    padding: 8px 16px;
    font-size: 12px;
    border-radius: 8px;
  }
`;

export const EmptyComments = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray[600]};

  svg {
    margin-bottom: 16px;
    color: ${({ theme }) => theme.colors.gray[400]};
  }

  p {
    margin: 0 0 8px 0;
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray[800]};
  }

  span {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray[600]};
  }

  @media (max-width: 640px) {
    padding: 40px 16px;

    svg {
      width: 40px;
      height: 40px;
      margin-bottom: 12px;
    }

    p {
      font-size: 14px;
    }

    span {
      font-size: 12px;
    }
  }
`;

export const CommentActions = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: 8px;
`;

export const CommentLikeButton = styled.button<{ liked: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 10px;
  border-radius: 12px;
  transition: all 0.2s ease;

  svg {
    width: 18px;
    height: 18px;
    opacity: ${(props) => (props.liked ? 1 : 0.7)};
    display: block;
  }

  span {
    font-size: 13px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray[800]};
    min-width: 12px;
  }

  @media (max-width: 640px) {
    padding: 5px 8px;
    gap: 3px;

    svg {
      width: 16px;
      height: 16px;
    }

    span {
      font-size: 12px;
      min-width: 10px;
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue[200]};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const CommentOptionsButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 50%;
  transition: background-color 0.2s ease;
  color: ${({ theme }) => theme.colors.gray[800]};
  margin-left: auto;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[200]};
  }

  @media (max-width: 640px) {
    padding: 3px;

    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

export const CommentOptionsModal = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
  background-color: ${({ theme }) => theme.colors.blue[100]};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  min-width: 120px;
  z-index: 20002;
  overflow: hidden;

  @media (max-width: 640px) {
    top: 28px;
    min-width: 110px;
    border-radius: 10px;
  }
`;

export const CommentOptionItem = styled.div<{ delete?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  color: ${({ theme, delete: isDelete }) => isDelete ? theme.colors.red[500] : theme.colors.gray[1000]};
  font-size: 13px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue[200]};
  }

  svg {
    width: 14px;
    height: 14px;
  }

  @media (max-width: 640px) {
    padding: 8px 12px;
    font-size: 12px;
    gap: 6px;

    svg {
      width: 12px;
      height: 12px;
    }
  }
`;