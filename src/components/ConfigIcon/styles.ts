import styled from 'styled-components';

export const ConfigIconContainer = styled.img`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  cursor: pointer;
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 60px;
  right: 0px;
  background-color: white;
  padding: 20px;
  width: 200px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

export const ThemeSwitch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;

  input[type="checkbox"] {
    display: none;
  }

  label {
    position: relative;
    width: 50px;
    height: 25px;
    background-color: #ccc;
    border-radius: 15px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  label::before {
    content: "";
    position: absolute;
    top: 3px;
    left: 3px;
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
    transition: transform 0.3s;
  }

  input[type="checkbox"]:checked + label {
    background-color: #009BDE;
  }

  input[type="checkbox"]:checked + label::before {
    transform: translateX(25px);
  }
`;