import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  box-sizing: border-box;
`;

export const TextPost = styled.div`
  width: 100%;
  max-width: 300px;
  margin-bottom: 20px;
  position: relative;

  textarea {
    width: 100%;
    height: 50px;
    border: 1px solid black;
    border-radius: 8px;
    padding: 10px;
    font-size: 16px;
    resize: none;
    box-sizing: border-box;
    background: rgb(222, 246, 255);
  }

  ::placeholder {
    color: black;
  }
`;

export const IconButton = styled.button`
  position: absolute;
  top: 50%;
  right: -50px;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  transition: transform 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 30px;
    height: 30px;
  }

  &:active {
    transform: translateY(-50%) scale(0.9);
  }
`;

export const BoxPost = styled.div`
  width: 100%;
  max-width: 600px;
  height: 440px;
  overflow: visible;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
  position: relative;

  p {
    color: #aaa;
  }
`;

export const Post = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  word-wrap: break-word;
  text-align: center;
`;

export const HeartButton = styled.button<{ liked: boolean }>`
  position: absolute;
  right: -50px;
  top: 20%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease, opacity 0.3s ease;

  img {
    width: 30px;
    height: 30px;
    opacity: ${(props) => (props.liked ? 1 : 0.8)};
  }

  &:hover img {
    transform: scale(1.2);
  }

  &:active img {
    transform: scale(0.9);
  }
`;

export const CommentButton = styled.button`
  position: absolute;
  right: -50px;
  top: 30%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease;

  img {
    width: 30px;
    height: 30px;
    opacity: 0.8;
  }

  &:hover img {
    transform: scale(1.2);
  }

  &:active img {
    transform: scale(0.9);
  }
`;