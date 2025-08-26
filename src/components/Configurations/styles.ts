import styled from "styled-components";

export const ConfigTrigger = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 6px 12px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.blue[100]};
  z-index: 1000;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  span {
    font-size: 14px;
    font-weight: bold;
  }
`;

export const ArrowIcon = styled.div<{ isOpen: boolean }>`
  transition: transform 0.3s ease;
  display: flex;
  align-items: center;
  transform: rotate(${({ isOpen }) => (isOpen ? "180deg" : "0deg")});
`;

export const ModalContainer = styled.div`
  position: absolute;
  z-index: 9999;
  top: 50px;
  right: 20px;
  background-color: ${({ theme }) => theme.colors.blue[100]};
  padding: 20px;
  width: 220px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const OptionRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-weight: 500;
`;

export const Separator = styled.hr`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.gray[300]};
  border: none;
`;

export const ReportSection = styled.div`
  text-align: left;
  border: 2px solid ${({ theme }) => theme.colors.gray[1000]};
  border-radius: 8px;
  padding: 10px;

  h4 {
    font-size: 14px;
    margin-bottom: 6px;
    font-weight: bold;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 70px;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.gray[1000]};
  font-size: 13px;
  resize: none;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[500]};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.blue[650]};
  }
`;

export const ReportButton = styled.button`
  width: 100%;
  margin-top: 8px;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.blue[650]};
  color: ${({ theme }) => theme.colors.gray[50]};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 13px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue[850]};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray[300]};
    cursor: not-allowed;
  }
`;

export const LogoutButton = styled.button`
  background: transparent;
  border: none;
  color: red;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  justify-content: center;
`;

export const VerticalSeparator = styled.div`
  width: 1px;
  height: 24px;
  background-color: ${({ theme }) => theme.colors.gray[400]};
  margin: 0 8px;
`;

export const ClickableRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;

  &:hover {
    opacity: 0.8;
  }
`;
