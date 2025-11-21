import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
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

export const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.colors.blue[100]};
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 600px;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.blue[200]};

  @media (max-width: 768px) {
    max-width: 95%;
    border-radius: 16px;
    max-height: 90vh;
  }

  @media (max-width: 640px) {
    max-width: 100%;
    max-height: 95vh;
    border-radius: 14px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 28px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[300]};

  @media (max-width: 640px) {
    padding: 20px 24px;
  }
`;

export const ModalTitle = styled.h2`
  font-size: 22px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.gray[1000]};
  margin: 0;

  @media (max-width: 640px) {
    font-size: 18px;
  }
`;

export const ModalCloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s ease;
  color: ${({ theme }) => theme.colors.gray[1000]};

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[200]};
  }
`;

export const WarningBanner = styled.div`
  background-color: ${({ theme }) => theme.colors.blue[200]};
  border: 1px solid ${({ theme }) => theme.colors.blue[400]};
  border-radius: 8px;
  padding: 12px 16px;
  margin: 0 28px 20px 28px;
  display: flex;
  align-items: center;
  gap: 10px;

  body.night-mode & {
    background-color: ${({ theme }) => theme.colors.gray[800]};
    border-color: ${({ theme }) => theme.colors.blue[500]};
  }

  @media (max-width: 640px) {
    margin: 0 24px 16px 24px;
    padding: 10px 14px;
    font-size: 13px;
  }
`;

export const WarningText = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray[900]};
  font-weight: 500;

  body.night-mode & {
    color: ${({ theme }) => theme.colors.gray[100]};
  }

  @media (max-width: 640px) {
    font-size: 12px;
  }
`;

export const CategoriesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 24px 28px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 640px) {
    padding: 20px 24px;
    gap: 20px;
  }
`;

export const CategoryTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray[1000]};
  margin: 0 0 16px 0;

  @media (max-width: 640px) {
    font-size: 16px;
    margin-bottom: 12px;
  }
`;

export const AvatarsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
`;

export const AvatarOption = styled.div<{ $isSelected: boolean }>`
  position: relative;
  aspect-ratio: 1;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 3px solid
    ${({ $isSelected, theme }) =>
      $isSelected ? theme.colors.blue[650] : "transparent"};
  box-shadow: ${({ $isSelected }) =>
    $isSelected ? "0 4px 12px rgba(0, 178, 255, 0.4)" : "0 2px 4px rgba(0, 0, 0, 0.1)"};
  background-color: ${({ theme }) => theme.colors.gray[200]};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    border-color: ${({ theme }) => theme.colors.blue[650]};
  }

  @media (max-width: 640px) {
    border-radius: 10px;
    border-width: 2px;
  }
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  background-color: ${({ theme }) => theme.colors.gray[200]};

  &[src=""],
  &:not([src]) {
    opacity: 0;
  }
`;

export const SelectedIndicator = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 178, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 32px;
    height: 32px;
    background-color: ${({ theme }) => theme.colors.blue[650]};
    border-radius: 50%;
    padding: 4px;
  }

  @media (max-width: 640px) {
    svg {
      width: 24px;
      height: 24px;
      padding: 3px;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  padding: 20px 28px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray[300]};
  justify-content: flex-end;

  @media (max-width: 640px) {
    padding: 16px 24px;
    gap: 10px;
  }
`;

export const SaveButton = styled.button`
  padding: 10px 24px;
  background-color: ${({ theme }) => theme.colors.blue[650]};
  color: ${({ theme }) => theme.colors.gray[50]};
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.blue[850]};
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 640px) {
    padding: 8px 20px;
    font-size: 13px;
    border-radius: 8px;
  }
`;

export const CancelButton = styled.button`
  padding: 10px 24px;
  background-color: ${({ theme }) => theme.colors.gray[300]};
  color: ${({ theme }) => theme.colors.gray[1000]};
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[400]};
  }

  @media (max-width: 640px) {
    padding: 8px 20px;
    font-size: 13px;
    border-radius: 8px;
  }
`;

