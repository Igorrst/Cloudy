import styled from "styled-components";

export const ConfigTrigger = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 8px 14px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.blue[100]};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  z-index: 1000;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue[150]};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }

  @media (max-width: 1024px) {
    top: 18px;
    right: 18px;
    padding: 7px 12px;
  }

  @media (max-width: 768px) {
    top: 15px;
    right: 15px;
    padding: 6px 10px;
    gap: 6px;
    border-radius: 14px;
  }

  @media (max-width: 640px) {
    top: 12px;
    right: 12px;
    padding: 5px 8px;
    gap: 5px;
    border-radius: 12px;
  }
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
  padding: 24px;
  width: 280px;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.colors.blue[200]};

  @media (max-width: 1024px) {
    width: 260px;
    padding: 20px;
    top: 48px;
    right: 18px;
  }

  @media (max-width: 768px) {
    top: 45px;
    right: 15px;
    width: 240px;
    padding: 18px;
    gap: 16px;
    border-radius: 14px;
  }

  @media (max-width: 640px) {
    top: 42px;
    right: 12px;
    width: 220px;
    padding: 16px;
    gap: 14px;
    border-radius: 12px;
  }
`;

export const OptionRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray[1000]};
  padding: 8px 12px;
  border-radius: 10px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue[150]};
  }

  body.night-mode & {
    color: ${({ theme }) => theme.colors.gray[1000]} !important;
  }

  svg {
    color: ${({ theme }) => theme.colors.gray[1000]};
    transition: transform 0.2s ease;
  }

  body.night-mode & svg {
    color: ${({ theme }) => theme.colors.gray[1000]} !important;
  }

  &:hover svg {
    transform: scale(1.1);
  }

  @media (max-width: 640px) {
    padding: 6px 8px;
    border-radius: 8px;
  }
`;

export const Separator = styled.hr`
  width: 100%;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    ${({ theme }) => theme.colors.gray[300]},
    transparent
  );
  border: none;
  margin: 4px 0;
`;

export const ReportSection = styled.div`
  text-align: left;
  border: 1.5px solid ${({ theme }) => theme.colors.blue[300]};
  border-radius: 12px;
  padding: 16px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.blue[50]},
    ${({ theme }) => theme.colors.blue[100]}
  );
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.blue[650]};
    box-shadow: 0 4px 12px rgba(0, 178, 255, 0.15);
  }

  h4 {
    font-size: 15px;
    margin-bottom: 10px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray[1000]};
    display: flex;
    align-items: center;
    gap: 8px;

    svg {
      color: ${({ theme }) => theme.colors.blue[650]};
      flex-shrink: 0;
    }
  }

  body.night-mode & h4 {
    color: ${({ theme }) => theme.colors.gray[1000]} !important;
  }

  @media (max-width: 768px) {
    padding: 14px;
    border-radius: 10px;

    h4 {
      font-size: 14px;
      margin-bottom: 8px;
    }
  }

  @media (max-width: 640px) {
    padding: 12px;
    border-radius: 8px;

    h4 {
      font-size: 13px;
      margin-bottom: 6px;
    }
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 80px;
  padding: 10px 12px;
  border-radius: 10px;
  border: 1.5px solid ${({ theme }) => theme.colors.gray[300]};
  font-size: 13px;
  resize: vertical;
  outline: none;
  background-color: ${({ theme }) => theme.colors.gray[50]};
  color: ${({ theme }) => theme.colors.gray[1000]};
  transition: all 0.2s ease;
  font-family: inherit;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[500]};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.blue[650]};
    box-shadow: 0 0 0 3px rgba(0, 178, 255, 0.1);
    background-color: ${({ theme }) => theme.colors.blue[50]};
  }

  @media (max-width: 640px) {
    min-height: 70px;
    padding: 8px 10px;
    font-size: 12px;
    border-radius: 8px;
  }
`;

export const ReportButton = styled.button`
  width: 100%;
  margin-top: 10px;
  padding: 10px 16px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.blue[650]}, ${({ theme }) => theme.colors.blue[750]});
  color: ${({ theme }) => theme.colors.gray[50]};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 178, 255, 0.2);

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.blue[750]}, ${({ theme }) => theme.colors.blue[850]});
    box-shadow: 0 4px 12px rgba(0, 178, 255, 0.3);
    transform: translateY(-2px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.gray[300]};
    cursor: not-allowed;
    box-shadow: none;
    transform: none;
  }

  @media (max-width: 640px) {
    padding: 8px 12px;
    font-size: 12px;
    margin-top: 8px;
    border-radius: 8px;
  }
`;

export const LogoutButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.red[500]};
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 10px 12px;
  margin: 0;
  width: 100%;
  justify-content: flex-start;
  border-radius: 10px;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(255, 21, 21, 0.1);
    transform: translateX(4px);
  }

  svg {
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    padding: 8px 10px;
    font-size: 14px;
    gap: 8px;
  }

  @media (max-width: 640px) {
    padding: 7px 8px;
    font-size: 13px;
    gap: 6px;
    border-radius: 8px;
  }
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
  justify-content: flex-start;
  gap: 12px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray[1000]};
  padding: 10px 12px;
  border-radius: 10px;
  transition: all 0.2s ease;

  body.night-mode & {
    color: ${({ theme }) => theme.colors.gray[1000]} !important;
  }

  span {
    color: ${({ theme }) => theme.colors.gray[1000]};
  }

  body.night-mode & span {
    color: ${({ theme }) => theme.colors.gray[1000]} !important;
  }

  svg {
    transition: transform 0.2s ease;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue[150]};
    transform: translateX(4px);

    svg {
      transform: scale(1.1);
    }
  }

  @media (max-width: 768px) {
    padding: 8px 10px;
    font-size: 14px;
    gap: 10px;
  }

  @media (max-width: 640px) {
    padding: 7px 8px;
    font-size: 13px;
    gap: 8px;
    border-radius: 8px;
  }
`;

export const ConfirmModalOverlay = styled.div`
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
`;

export const ConfirmModalContent = styled.div`
  background-color: ${({ theme }) => theme.colors.blue[100]};
  padding: 28px;
  border-radius: 16px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25), 0 4px 12px rgba(0, 0, 0, 0.15);
  min-width: 320px;
  max-width: 90%;
  border: 1px solid ${({ theme }) => theme.colors.blue[200]};

  @media (max-width: 1024px) {
    padding: 24px;
    min-width: 300px;
  }

  @media (max-width: 768px) {
    padding: 22px;
    min-width: 290px;
    border-radius: 14px;
  }

  @media (max-width: 640px) {
    padding: 20px;
    min-width: 280px;
    max-width: 95%;
    border-radius: 12px;
  }
`;

export const ConfirmModalTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray[1000]};

  @media (max-width: 640px) {
    font-size: 16px;
    margin-bottom: 16px;
  }
`;

export const ConfirmModalButtons = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`;

export const ConfirmButton = styled.button`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.red[500]};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.red[600]};
  }
`;

export const CancelButton = styled.button`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.gray[300]};
  color: ${({ theme }) => theme.colors.gray[1000]};
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[400]};
  }
`;

export const ReportsModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20000;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 640px) {
    padding: 10px;
  }
`;

export const ReportsModalContent = styled.div`
  background-color: ${({ theme }) => theme.colors.blue[100]};
  border-radius: 16px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 600px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 768px) {
    max-width: 95%;
    max-height: 85vh;
    border-radius: 12px;
  }

  @media (max-width: 640px) {
    max-width: 100%;
    max-height: 90vh;
    border-radius: 10px;
  }
`;

export const ReportsModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[300]};

  @media (max-width: 640px) {
    padding: 16px 20px;
  }
`;

export const ReportsModalTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.gray[1000]};
  margin: 0;

  svg {
    color: ${({ theme }) => theme.colors.blue[650]};
  }

  @media (max-width: 640px) {
    font-size: 18px;
    gap: 8px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const ReportsModalCloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s ease;
  color: ${({ theme }) => theme.colors.gray[1000]};

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[200]};
  }

  body.night-mode & {
    color: ${({ theme }) => theme.colors.gray[1000]};
  }
`;

export const ReportsList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.gray[200]};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.gray[400]};
    border-radius: 4px;

    &:hover {
      background: ${({ theme }) => theme.colors.gray[500]};
    }
  }

  @media (max-width: 640px) {
    padding: 16px 20px;
    gap: 12px;
  }
`;

export const ReportItem = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[50]};
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.colors.blue[400]};
  }

  @media (max-width: 640px) {
    padding: 12px;
    gap: 10px;
    border-radius: 10px;
  }
`;

export const ReportText = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.gray[1000]};
  margin: 0;
  word-wrap: break-word;

  @media (max-width: 640px) {
    font-size: 13px;
  }
`;

export const ReportDate = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray[600]};
  font-weight: 500;

  @media (max-width: 640px) {
    font-size: 11px;
  }
`;

export const ReportActions = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 4px;

  @media (max-width: 640px) {
    gap: 6px;
    flex-wrap: wrap;
  }
`;

export const EditButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  background-color: ${({ theme }) => theme.colors.blue[650]};
  color: ${({ theme }) => theme.colors.gray[50]};
  border: none;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue[850]};
  }

  @media (max-width: 640px) {
    padding: 6px 10px;
    font-size: 12px;
    gap: 4px;

    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  background-color: ${({ theme }) => theme.colors.red[500]};
  color: ${({ theme }) => theme.colors.gray[50]};
  border: none;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.red[600]};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: 640px) {
    padding: 6px 10px;
    font-size: 12px;
    gap: 4px;

    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

export const EmptyReports = styled.div`
  text-align: center;
  padding: 40px 20px;
  color: ${({ theme }) => theme.colors.gray[600]};
  font-size: 14px;

  @media (max-width: 640px) {
    padding: 30px 15px;
    font-size: 13px;
  }
`;

export const EditReportSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

export const EditTextarea = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 12px;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.blue[650]};
  font-size: 14px;
  resize: vertical;
  outline: none;
  font-family: inherit;
  color: ${({ theme }) => theme.colors.gray[1000]};

  &:focus {
    border-color: ${({ theme }) => theme.colors.blue[850]};
  }

  @media (max-width: 640px) {
    padding: 10px;
    font-size: 13px;
    min-height: 80px;
  }
`;

export const SaveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.blue[650]};
  color: ${({ theme }) => theme.colors.gray[50]};
  border: none;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue[850]};
  }

  @media (max-width: 640px) {
    padding: 6px 12px;
    font-size: 12px;
    gap: 4px;

    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

export const CancelEditButton = styled.button`
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.gray[300]};
  color: ${({ theme }) => theme.colors.gray[1000]};
  border: none;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[400]};
  }

  @media (max-width: 640px) {
    padding: 6px 12px;
    font-size: 12px;
  }
`;