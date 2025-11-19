import styled from "styled-components";

export const Container = styled.div`
  max-width: 935px;
  width: 100%;
  margin: 0 auto;
  padding: 80px 20px 80px;
  min-height: 100vh;
  position: relative;
  color: ${({ theme }) => theme.colors.gray[1000]};
  box-sizing: border-box;
  overflow-x: hidden;

  body.night-mode & {
    color: ${({ theme }) => theme.colors.gray[50]};
  }

  @media (max-width: 768px) {
    padding: 80px 16px 60px;
  }

  @media (max-width: 640px) {
    padding: 70px 12px 50px;
  }
`;

export const TopBar = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  z-index: 1000;
  flex-direction: row-reverse;

  & > div:first-child {
    position: static !important;
    top: auto !important;
    right: auto !important;
  }

  @media (max-width: 768px) {
    top: 15px;
    right: 15px;
    gap: 16px;
  }

  @media (max-width: 640px) {
    top: 12px;
    right: 12px;
    gap: 12px;
  }
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.colors.blue[100]};
  border: none;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.blue[700]};
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 10001;

  body.night-mode & {
    background: ${({ theme }) => theme.colors.gray[800]};
    color: ${({ theme }) => theme.colors.gray[100]};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }

  &:hover {
    background: ${({ theme }) => theme.colors.blue[200]};
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

    body.night-mode & {
      background: ${({ theme }) => theme.colors.gray[700]};
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
    }
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
  }

  @media (max-width: 640px) {
    width: 32px;
    height: 32px;
  }
`;

export const ProfileHeader = styled.div`
  display: flex;
  gap: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.blue[200]};
  margin-bottom: 30px;

  body.night-mode & {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[700]};
  }

  @media (max-width: 768px) {
    gap: 20px;
    padding-bottom: 20px;
    margin-bottom: 20px;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 16px;
    padding-bottom: 16px;
    margin-bottom: 16px;
  }
`;

export const ProfileInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    font-size: 28px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.gray[1000]};
    margin: 0;

    body.night-mode & {
      color: ${({ theme }) => theme.colors.gray[50]};
    }

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 640px) {
    font-size: 20px;
  }
  }
`;

export const StatsSection = styled.div`
  display: flex;
  gap: 40px;

  @media (max-width: 768px) {
    gap: 30px;
  }

  @media (max-width: 640px) {
    justify-content: center;
    gap: 20px;
  }
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  strong {
    font-size: 18px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.gray[1000]};

    body.night-mode & {
      color: ${({ theme }) => theme.colors.gray[50]};
    }

    @media (max-width: 640px) {
      font-size: 16px;
    }
  }

  span {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray[800]};
    text-transform: lowercase;
    font-weight: 600;

    body.night-mode & {
      color: ${({ theme }) => theme.colors.gray[300]};
    }

    @media (max-width: 640px) {
      font-size: 12px;
    }
  }
`;

export const BioSection = styled.div`
  padding: 20px 0;
  margin-bottom: 30px;
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 30px;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }

  @media (max-width: 640px) {
    gap: 16px;
    padding: 16px 0;
    margin-bottom: 20px;
  }
`;

export const BioContent = styled.div`
  flex: 1;
  min-width: 0;
`;

export const BioText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.gray[900]};
  margin: 0;
  word-wrap: break-word;
  font-weight: 500;

  body.night-mode & {
    color: ${({ theme }) => theme.colors.gray[200]};
  }

  @media (max-width: 640px) {
    font-size: 14px;
    line-height: 1.5;
  }
`;

export const BioTextarea = styled.textarea`
  width: 100%;
  min-height: 80px;
  padding: 12px;
  padding-right: 40px;
  border: 1px solid ${({ theme }) => theme.colors.blue[300]};
  border-radius: 8px;
  font-size: 16px;
  font-family: inherit;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.blue[900]};
  background: ${({ theme }) => theme.colors.blue[50]};
  resize: vertical;
  outline: none;
  transition: border-color 0.2s;

  body.night-mode & {
    border: 1px solid ${({ theme }) => theme.colors.gray[600]};
    color: ${({ theme }) => theme.colors.gray[100]};
    background: ${({ theme }) => theme.colors.gray[900]};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.blue[500]};

    body.night-mode & {
      border-color: ${({ theme }) => theme.colors.blue[500]};
    }
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.blue[400]};

    body.night-mode & {
      color: ${({ theme }) => theme.colors.gray[500]};
    }
  }

  @media (max-width: 640px) {
    min-height: 70px;
    padding: 10px;
    padding-right: 36px;
    font-size: 14px;
    border-radius: 6px;
  }
`;

export const BioActions = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;

  @media (max-width: 640px) {
    gap: 8px;
    margin-top: 8px;
  }
`;

export const EditButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.blue[300]};
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.blue[700]};
  cursor: pointer;
  transition: all 0.2s;
  font-size: 14px;

  body.night-mode & {
    border: 1px solid ${({ theme }) => theme.colors.gray[600]};
    color: ${({ theme }) => theme.colors.gray[200]};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.blue[100]};
    border-color: ${({ theme }) => theme.colors.blue[400]};

    body.night-mode & {
      background: ${({ theme }) => theme.colors.gray[800]};
      border-color: ${({ theme }) => theme.colors.gray[500]};
    }
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 640px) {
    padding: 5px 10px;
    font-size: 12px;
    border-radius: 5px;

    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

export const SaveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: ${({ theme }) => theme.colors.blue[500]};
  border: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    background: ${({ theme }) => theme.colors.blue[600]};
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 640px) {
    padding: 6px 12px;
    font-size: 13px;
    gap: 5px;
    border-radius: 5px;

    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

export const CancelButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.blue[300]};
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.blue[700]};
  cursor: pointer;
  transition: all 0.2s;
  font-size: 14px;

  body.night-mode & {
    border: 1px solid ${({ theme }) => theme.colors.gray[600]};
    color: ${({ theme }) => theme.colors.gray[200]};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.blue[100]};
    border-color: ${({ theme }) => theme.colors.blue[400]};

    body.night-mode & {
      background: ${({ theme }) => theme.colors.gray[800]};
      border-color: ${({ theme }) => theme.colors.gray[500]};
    }
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 640px) {
    padding: 6px 12px;
    font-size: 13px;
    gap: 5px;
    border-radius: 5px;

    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

export const PostsScrollContainer = styled.div`
  width: 100%;
  max-width: 100%;
  max-height: calc(100vh - 180px);
  min-height: 400px;
  overflow-y: auto;
  overflow-x: hidden;
  margin-top: 30px;
  padding: 0;
  padding-bottom: 120px;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
  -ms-overflow-style: none;

  @media (max-width: 768px) {
    max-height: calc(100vh - 130px);
    min-height: 300px;
    padding-bottom: 100px;
  }

  @media (max-width: 640px) {
    max-height: calc(100vh - 120px);
    min-height: 250px;
    padding-bottom: 80px;
    margin-top: 20px;
  }
`;

export const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  padding-bottom: 80px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    padding-bottom: 60px;
  }

  @media (max-width: 640px) {
    gap: 16px;
    padding-bottom: 50px;
  }
`;

export const PostItem = styled.div`
  width: 100%;
  max-width: 100%;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  aspect-ratio: 1;
  box-sizing: border-box;
  overflow: hidden;

  & > div {
    height: 100%;
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 350px;
    box-sizing: border-box;
  }

  @media (max-width: 1024px) {
    min-height: 320px;
    
    & > div {
      min-height: 320px;
    }
  }

  @media (max-width: 768px) {
    min-height: 300px;
    
    & > div {
      min-height: 300px;
    }
  }

  @media (max-width: 640px) {
    min-height: 280px;
    
    & > div {
      min-height: 280px;
    }
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: ${({ theme }) => theme.colors.blue[600]};

  body.night-mode & {
    color: ${({ theme }) => theme.colors.gray[400]};
  }

  p {
    font-size: 18px;
    margin: 0;

    @media (max-width: 640px) {
      font-size: 16px;
    }
  }
`;

export const EmojiButton = styled.button`
  position: absolute;
  right: 12px;
  top: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: transparent;
  border: none;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.blue[600]};
  cursor: pointer;
  transition: all 0.2s;
  z-index: 10;

  body.night-mode & {
    color: ${({ theme }) => theme.colors.gray[300]};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.blue[100]};
    color: ${({ theme }) => theme.colors.blue[700]};

    body.night-mode & {
      background: ${({ theme }) => theme.colors.gray[800]};
      color: ${({ theme }) => theme.colors.gray[100]};
    }
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 640px) {
    width: 28px;
    height: 28px;
    right: 10px;
    top: 10px;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

export const EmojiPickerContainer = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  z-index: 1000;
  border-radius: 16px;
  overflow: visible;
  box-shadow: 
    0 8px 24px rgba(0, 0, 0, 0.2),
    0 4px 12px rgba(0, 0, 0, 0.15);
  background: ${({ theme }) => theme.colors.blue[50]};
  border: 1px solid ${({ theme }) => theme.colors.blue[200]};
  animation: slideInUp 0.3s ease-out;

  body.night-mode & {
    background: ${({ theme }) => theme.colors.gray[900]};
    border: 1px solid ${({ theme }) => theme.colors.gray[700]};
    box-shadow: 
      0 8px 24px rgba(0, 0, 0, 0.5),
      0 4px 12px rgba(0, 0, 0, 0.3);
  }

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

  @media (max-width: 768px) {
    right: auto;
    left: 50%;
    transform: translateX(-50%);
    max-width: calc(100vw - 40px);
    min-width: calc(100vw - 40px) !important;
    width: calc(100vw - 40px) !important;
  }

  @media (max-width: 640px) {
    left: 50%;
    right: auto;
    transform: translateX(-50%);
    max-width: calc(100vw - 24px);
    min-width: calc(100vw - 24px) !important;
    width: calc(100vw - 24px) !important;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  width: 280px;
  flex-shrink: 0;

  @media (max-width: 1024px) {
    width: 250px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 640px) {
    & input {
      font-size: 13px !important;
      padding: 6px 32px 6px 10px !important;
    }

    & svg {
      right: 8px !important;
      width: 16px !important;
      height: 16px !important;
    }
  }

  & > div {
    margin: 0 !important;
    max-width: 100% !important;
  }

  & input {
    font-size: 14px !important;
    padding: 8px 36px 8px 12px !important;
  }

  & svg {
    right: 10px !important;
    width: 18px !important;
    height: 18px !important;
  }
`;

export const FollowButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: ${({ theme }) => theme.colors.blue[500]};
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.blue[600]};
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 13px;
  }

  @media (max-width: 640px) {
    padding: 6px 12px;
    font-size: 12px;
    gap: 6px;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

export const UnfollowButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.blue[500]};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.blue[500]};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  body.night-mode & {
    border-color: ${({ theme }) => theme.colors.blue[400]};
    color: ${({ theme }) => theme.colors.blue[400]};
  }

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.blue[50]};
    border-color: ${({ theme }) => theme.colors.blue[600]};
    color: ${({ theme }) => theme.colors.blue[600]};
    transform: translateY(-1px);

    body.night-mode & {
      background: ${({ theme }) => theme.colors.gray[800]};
      border-color: ${({ theme }) => theme.colors.blue[500]};
      color: ${({ theme }) => theme.colors.blue[500]};
    }
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 13px;
  }

  @media (max-width: 640px) {
    padding: 6px 12px;
    font-size: 12px;
    gap: 6px;
    border-width: 1.5px;

    svg {
      width: 16px;
      height: 16px;
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
  z-index: 10000;
  padding: 20px;
`;

export const ModalContent = styled.div`
  background: ${({ theme }) => theme.colors.blue[50]};
  border-radius: 16px;
  width: 100%;
  max-width: 400px;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);

  body.night-mode & {
    background: ${({ theme }) => theme.colors.gray[900]};
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 768px) {
    max-width: 90%;
    max-height: 70vh;
  }

  @media (max-width: 640px) {
    max-width: 95%;
    max-height: 75vh;
    border-radius: 12px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.blue[200]};

  body.night-mode & {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[700]};
  }
`;

export const ModalTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray[1000]};
  margin: 0;

  body.night-mode & {
    color: ${({ theme }) => theme.colors.gray[50]};
  }

  @media (max-width: 640px) {
    font-size: 16px;
  }
`;

export const ModalCloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: transparent;
  border: none;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.gray[700]};
  cursor: pointer;
  transition: all 0.2s;

  body.night-mode & {
    color: ${({ theme }) => theme.colors.gray[300]};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.blue[100]};
    color: ${({ theme }) => theme.colors.gray[1000]};

    body.night-mode & {
      background: ${({ theme }) => theme.colors.gray[800]};
      color: ${({ theme }) => theme.colors.gray[100]};
    }
  }
`;

export const ModalList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 10px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.blue[300]};
    border-radius: 3px;

    body.night-mode & {
      background: ${({ theme }) => theme.colors.gray[600]};
    }
  }
`;

export const ModalUserItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.blue[100]};

    body.night-mode & {
      background: ${({ theme }) => theme.colors.gray[800]};
    }
  }

  span {
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray[1000]};

    body.night-mode & {
      color: ${({ theme }) => theme.colors.gray[50]};
    }
  }

  @media (max-width: 640px) {
    width: 28px;
    height: 28px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

export const ModalEmptyState = styled.div`
  padding: 40px 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray[600]};
  font-size: 14px;

  body.night-mode & {
    color: ${({ theme }) => theme.colors.gray[400]};
  }

  @media (max-width: 640px) {
    padding: 30px 16px;
    font-size: 13px;
  }
`;
