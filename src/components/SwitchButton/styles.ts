import styled from 'styled-components';

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const SwitchLabel = styled.label<{ checked: boolean }>`
  position: relative;
  width: 60px;
  height: 30px;
  margin-right:20px;
  background-color: ${(props) => (props.checked ? '#009BDE' : 'white')};
  border: 2px solid black;
  border-radius: 15px;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
`;

export const SwitchKnob = styled.div<{ checked: boolean }>`
  position: absolute;
  left: ${(props) => (props.checked ? '32px' : '3px')};
  width: 24px;
  height: 24px;
  background-color: white;
  border: 2px solid black;
  border-radius: 50%;
  transition: left 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;