import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  box-sizing: border-box;
  gap: 20px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const TextPost = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 50px;
  width: 600px;
  border-radius: 10px;
  padding: 20px;
  position: relative;
  background-color: rgba(
    ${({ theme }) => parseInt(theme.colors.blue[100].slice(1, 3), 16)},
    ${({ theme }) => parseInt(theme.colors.blue[100].slice(3, 5), 16)},
    ${({ theme }) => parseInt(theme.colors.blue[100].slice(5, 7), 16)},
    0.4
  );

  @media (max-width: 768px) {
    margin-top: 100px;
  }

  @media (max-width: 480px) {
    margin-top: 100px;
    max-width: 90%;
  }
`;

export const TextArea = styled.textarea`
  max-width: 500px;
  width: 100%;
  height: 80px;
  border-radius: 10px;
  padding: 10px 10px 10px 20px;
  font-size: 16px;
  resize: none;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.blue[100]};

  ::placeholder {
    color: ${({ theme }) => theme.colors.gray[1000]};
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

  @media (max-width: 768px) {
    max-width: 90%;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

export const UserTop = styled.div`
  right: 70px;
  height: 30px;
  cursor: pointer;
  position: fixed;
  top: 20px;
  z-index: 1000;
`;
