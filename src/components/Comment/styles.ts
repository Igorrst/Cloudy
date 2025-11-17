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
  z-index: 10000;
  padding: 20px;
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
`;

export const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const CommentContent = styled.p`
  margin: 0;
  padding-left: 44px;
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.gray[900]};
  word-break: break-word;
`;

export const CommentTime = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray[600]};
  margin-left: 8px;
`;

export const CommentInputContainer = styled.div`
  display: flex;
  gap: 12px;
  padding: 16px 24px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray[300]};
  background-color: ${({ theme }) => theme.colors.blue[100]};
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
`;