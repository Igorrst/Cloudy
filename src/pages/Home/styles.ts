import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 20px;
  }
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

  @media (max-width: 768px) {
  margin-top: 100px;
  }

  @media (max-width:  480px) {
  margin-top: 100px;
  max-width: 60%;
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

  @media (max-width: 480px) {
    right: -30px;
  }
`;

export const BoxPost = styled.div`
  width: 100%;
  max-width: 600px;
  min-height: 400px;
  height: auto;
  border: 2px solid black;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.86);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  margin-top: 40px;

  p {
    color: #aaa;
  }

  @media (max-width: 768px) {
    max-width: 90%;
  }

  @media (max-width: 480px) {
    max-width: 70%;
  }
`;

export const Post = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  word-wrap: break-word;
  word-break: break-word;
  white-space: pre-wrap;
  text-align: center;
`;

export const HeartButton = styled.button<{ liked: boolean }>`
  position: absolute;
  right: -50px;
  top: 45%;
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

  @media (max-width: 480px) {
    right: -40px;
  }
`;

export const CommentButton = styled.button`
  position: absolute;
  right: -50px;
  top: 55%;
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

  @media (max-width: 480px) {
    right: -40px;
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

export const UserPost = styled.div`
  position: absolute;
  top: 20px;
  left: -50px;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;

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

  @media (max-width: 480px) {
    right: 280px;
  }
`;

export const UserModal = styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  margin-right: 100px;
  background: white;
  border: 1px solid black;
  border-radius: 10px;
  padding: 15px;
  width: 180px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  h3 {
    font-size: 14px;
    margin-bottom: 8px;
  }

  .profile-btn {
    width: 100%;
    padding: 8px;
    background: #009BDE;
    color: white;
    border: 1px solid black;
    border-radius: 10px;
    cursor: pointer;
    font-size: 14px;
  }

  .profile-btn:hover {
    background:rgb(123, 215, 255);
  }
`;