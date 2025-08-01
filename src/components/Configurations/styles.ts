import styled from "styled-components";

export const ConfigIconContainer = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
  position: fixed;
  top: 20px;
  right: 20px;
  margin: 0;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  position: absolute;
  z-index: 9999;
  top: 60px;
  right: 20px;
  background-color: ${({ theme }) => theme.colors.gray[50]};
  padding: 20px;
  width: 200px;
  border: 2px solid ${({ theme }) => theme.colors.blue[650]};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;

  h3 {
    font-size: 18px;
    margin-bottom: 20px;
  }
`;

export const ThemeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  margin-left: 20px;
`;

export const ThemeIcon = styled.img`
  width: 30px;
  height: 30px;
`;

export const ReportSection = styled.div`
  margin-top: 40px;
  text-align: left;
  border: 2px solid ${({ theme }) => theme.colors.gray[1000]};
  border-radius: 8px;
  padding: 5px;

  h4 {
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: bold;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 80px;
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.gray[1000]};
  font-size: 14px;
  resize: none;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.blue[650]};
  }
`;

export const ReportButton = styled.button`
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.blue[650]};
  color: ${({ theme }) => theme.colors.gray[50]};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue[850]};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray[300]};
    cursor: not-allowed;
  }
`;
