import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  box-sizing: border-box;
  gap: 20px;

  @media (max-width: 640px) {
    padding: 20px 16px;
    gap: 16px;
  }
`;

export const PostsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 600px;
`;

export const TextPost = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 50px;
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  padding: 20px;
  position: relative;
  background-color: rgba(
    ${({ theme }) => parseInt(theme.colors.blue[100].slice(1, 3), 16)},
    ${({ theme }) => parseInt(theme.colors.blue[100].slice(3, 5), 16)},
    ${({ theme }) => parseInt(theme.colors.blue[100].slice(5, 7), 16)},
    0.4
  );

  @media (max-width: 1024px) {
    max-width: 100%;
  }

  @media (max-width: 768px) {
    margin-top: 80px;
    padding: 16px;
    gap: 16px;
  }

  @media (max-width: 640px) {
    margin-top: 70px;
    padding: 12px;
    gap: 12px;
    border-radius: 8px;
  }
`;

export const TextArea = styled.textarea`
  flex: 1;
  height: 80px;
  border-radius: 10px;
  padding: 10px 10px 10px 20px;
  font-size: 16px;
  resize: none;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.blue[100]};
  border: none;
  outline: none;

  ::placeholder {
    color: ${({ theme }) => theme.colors.gray[1000]};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.blue[650]};
    outline-offset: -2px;
  }

  @media (max-width: 640px) {
    height: 70px;
    padding: 8px 8px 8px 16px;
    font-size: 14px;
    border-radius: 8px;
  }
`;

export const PublishButton = styled.button`
  background-color: ${({ theme }) => theme.colors.blue[100]};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  align-self: flex-end;
  padding: 8px 12px;
  gap: 4px;
  font-size: 14px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue[250]};
  }

  @media (max-width: 640px) {
    padding: 6px 10px;
    font-size: 13px;
    gap: 3px;
    border-radius: 8px;

    svg {
      width: 16px;
      height: 16px;
    }

    p {
      font-size: 13px;
    }
  }
`;

export const BoxPost = styled.div`
  width: 100%;
  max-width: 600px;
  height: 75vh;
  border-radius: 20px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  gap: 32px;
  overflow-y: scroll;
  padding: 10px;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
  -ms-overflow-style: none;

  @media (max-width: 1024px) {
    max-width: 100%;
  }

  @media (max-width: 768px) {
    height: 70vh;
    gap: 24px;
    padding: 8px;
    border-radius: 16px;
  }

  @media (max-width: 640px) {
    height: 65vh;
    gap: 20px;
    padding: 6px;
    border-radius: 12px;
  }
`;

export const UserTop = styled.div`
  right: 70px;
  height: 30px;
  cursor: pointer;
  position: fixed;
  top: 20px;
  z-index: 1000;

  @media (max-width: 1024px) {
    right: 60px;
    top: 18px;
  }

  @media (max-width: 768px) {
    right: 50px;
    top: 15px;
  }

  @media (max-width: 640px) {
    right: 16px;
    top: 12px;
  }
`;

export const TextAreaContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
  position: relative;
  flex: 1;

  @media (max-width: 640px) {
    gap: 6px;
  }
`;

export const EmojiButton = styled.button`
  background-color: ${({ theme }) => theme.colors.blue[100]};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  min-width: 40px;
  height: 40px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue[250]};
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 640px) {
    min-width: 36px;
    height: 36px;
    padding: 6px;
    border-radius: 8px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

export const EmojiPickerContainer = styled.div`
  position: absolute;
  top: 0;
  left: calc(100% + 20px);
  z-index: 1000;
  border-radius: 16px;
  overflow: visible;
  box-shadow: 
    0 8px 24px rgba(0, 0, 0, 0.2),
    0 4px 12px rgba(0, 0, 0, 0.15);
  background: ${({ theme }) => theme.colors.blue[50]};
  border: 1px solid ${({ theme }) => theme.colors.blue[200]};
  animation: slideInRight 0.3s ease-out;
  min-width: 350px !important;
  width: 350px !important;
  max-width: none !important;

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  & * {
    box-sizing: border-box !important;
  }

  & > div {
    width: 100% !important;
    min-width: 350px !important;
    max-width: none !important;
  }

  & > div > div {
    width: 100% !important;
    min-width: 350px !important;
    max-width: none !important;
  }

  & > div > div > div {
    width: 100% !important;
    min-width: 350px !important;
    max-width: none !important;
  }

  & input,
  & input[type="text"],
  & input[type="search"],
  & input[placeholder*="Search"],
  & input[placeholder*="search"],
  & input[placeholder],
  & input::placeholder {
    width: 100% !important;
    max-width: none !important;
    min-width: 250px !important;
    box-sizing: border-box !important;
    padding: 8px 12px !important;
    font-size: 14px !important;
    word-break: normal !important;
    word-wrap: normal !important;
    overflow-wrap: normal !important;
    white-space: nowrap !important;
    text-overflow: clip !important;
    overflow: visible !important;
    display: block !important;
    letter-spacing: normal !important;
  }

  & > div > div > input,
  & > div > div > div > input,
  & > div > div > div > div > input,
  & > div > div > div > div > div > input,
  & > div > div > div > div > div > div > input {
    width: 100% !important;
    max-width: none !important;
    min-width: 250px !important;
    box-sizing: border-box !important;
    overflow: visible !important;
    text-overflow: clip !important;
    white-space: nowrap !important;
    word-break: normal !important;
    word-wrap: normal !important;
    letter-spacing: normal !important;
  }

  & [class*="search"],
  & [class*="Search"],
  & [class*="input"],
  & [class*="Input"] {
    width: 100% !important;
    min-width: 250px !important;
    max-width: none !important;
    overflow: visible !important;
  }

  @media (max-width: 1024px) {
    left: auto;
    right: 0;
    top: calc(100% + 10px);
    transform: none;
    animation: slideInUp 0.3s ease-out;
    min-width: 320px !important;
    width: 320px !important;

    @keyframes slideInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  @media (max-width: 768px) {
    left: auto;
    right: 0;
    top: calc(100% + 10px);
    max-width: calc(100vw - 40px);
    min-width: calc(100vw - 40px) !important;
    width: calc(100vw - 40px) !important;
  }

  @media (max-width: 640px) {
    left: 50%;
    right: auto;
    transform: translateX(-50%);
    max-width: calc(100vw - 32px);
    min-width: calc(100vw - 32px) !important;
    width: calc(100vw - 32px) !important;
  }
`;