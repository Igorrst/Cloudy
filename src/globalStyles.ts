import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scrollbar-width: thin;
    scrollbar-color: #888 #f0f0f0;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    color: #333;
    height: 100%;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  html {
    height: 100%;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  html, body {
    overflow: hidden;
  }

  input, select, textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    border: none;
    outline: none;
    background: none;
    box-shadow: none;
  }

  input[type="text"], input[type="password"], textarea {
    height: 35px;
    padding: 8px;
  }

  input:focus, textarea:focus {
    outline: 2px solid #009BDE;
  }

  @media (max-width: 768px) {
    body {
      font-size: 14px;
    }
  }

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: #f0f0f0;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 6px;
    border: 3px solid #f0f0f0;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;