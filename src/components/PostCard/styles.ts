import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 200px;
  border-radius: 40px;
  background-color: ${({ theme }) => theme.colors.blue[100]};
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: 350px;
  }

  @media (max-width: 480px) {
    min-height: 300px;
    padding: 15px;
  }
`;

export const PostActions = styled.div`
  position: absolute;
  right: 100px;
  bottom: 10px;
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 480px) {
    right: 10px;
    gap: 15px;
  }
`;

export const PostContent = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray[900]};
  word-break: break-word;
  white-space: pre-wrap;
  text-align: center;
  padding: 0 20px;
  max-width: 100%;
`;

export const UserPostInfo = styled.div`
  position: absolute;
  left: 20px;
  bottom: 20px;
  display: flex;
  align-items: center;
  font-size: 13px;

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    opacity: 0.85;
    margin-right: 10px;
  }

  h3 {
    margin: 0;
    font-weight: normal;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    left: 10px;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 15px;
`;
