import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  border-radius: 20px;
  background-color: rgb(222, 246, 255);
  padding: 30px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const PostContent = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  word-wrap: break-word;
  word-break: break-word;
  white-space: pre-wrap;
  text-align: center;
`;

export const UserPostInfo = styled.div`
  position: absolute;
  left: 20px;
  bottom: 20px;
  display: flex;
  align-items: center;
  font-size: 12px;

  img {
    width: 30px;
    height: 30px;
    opacity: 0.8;
    margin-right: 10px;
  }

  h3 {
    margin: 0;
    font-weight: normal;
  }

  @media (max-width: 480px) {
    left: 10px;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
`;
