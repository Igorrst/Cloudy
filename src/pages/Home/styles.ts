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
    height: 45px;
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

  @media (max-width: 480px) {
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
    width: 45px;
    height: 45px;
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
  border-radius: 20px;
  background-color: rgb(222, 246, 255);
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

  @media (max-width: 768px) {
    max-width: 90%;
  }

  @media (max-width: 480px) {
    max-width: 70%;
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
