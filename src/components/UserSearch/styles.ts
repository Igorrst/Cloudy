import styled from "styled-components";

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto 30px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 12px 40px 12px 16px;
  border: 2px solid ${({ theme }) => theme.colors.blue[300]};
  border-radius: 24px;
  font-size: 16px;
  font-family: inherit;
  color: ${({ theme }) => theme.colors.blue[900]};
  background: ${({ theme }) => theme.colors.blue[50]};
  outline: none;
  transition: all 0.2s;

  body.night-mode & {
    border: 2px solid ${({ theme }) => theme.colors.gray[600]};
    color: ${({ theme }) => theme.colors.gray[100]};
    background: ${({ theme }) => theme.colors.gray[900]};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.blue[500]};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.blue[100]};

    body.night-mode & {
      border-color: ${({ theme }) => theme.colors.blue[500]};
      box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.blue[900]};
    }
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.blue[400]};

    body.night-mode & {
      color: ${({ theme }) => theme.colors.gray[500]};
    }
  }

  & + svg {
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.colors.blue[500]};
    pointer-events: none;

    body.night-mode & {
      color: ${({ theme }) => theme.colors.gray[400]};
    }
  }
`;

export const SearchResults = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.blue[50]};
  border: 2px solid ${({ theme }) => theme.colors.blue[300]};
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  max-height: 400px;
  overflow-y: auto;
  z-index: 1000;

  body.night-mode & {
    background: ${({ theme }) => theme.colors.gray[900]};
    border: 2px solid ${({ theme }) => theme.colors.gray[700]};
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  }
`;

export const UserResult = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  cursor: pointer;
  transition: background-color 0.2s;
  border-bottom: 1px solid ${({ theme }) => theme.colors.blue[200]};

  body.night-mode & {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[700]};
  }

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.blue[100]};

    body.night-mode & {
      background: ${({ theme }) => theme.colors.gray[800]};
    }
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const UserInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`;

export const UserName = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray[1000]};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  body.night-mode & {
    color: ${({ theme }) => theme.colors.gray[50]};
  }
`;

export const UserBio = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray[700]};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  body.night-mode & {
    color: ${({ theme }) => theme.colors.gray[400]};
  }
`;

export const EmptyResults = styled.div`
  padding: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray[600]};
  font-size: 14px;

  body.night-mode & {
    color: ${({ theme }) => theme.colors.gray[400]};
  }
`;

