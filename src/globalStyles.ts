import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scrollbar-width: thin;
    scrollbar-color: #888 #f0f0f0;
    outline-color: #17b9ff;
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

  .EmojiPickerReact input,
  .EmojiPickerReact input[type="text"],
  .EmojiPickerReact input[type="search"] {
    width: 100% !important;
    min-width: 250px !important;
    max-width: 100% !important;
    box-sizing: border-box !important;
    overflow: visible !important;
    text-overflow: clip !important;
    white-space: nowrap !important;
    word-break: normal !important;
    word-wrap: normal !important;
    letter-spacing: normal !important;
  }

  .EmojiPickerReact input::placeholder {
    content: "Buscar" !important;
  }

  .EmojiPickerReact input[placeholder="Search"] {
    &::placeholder {
      content: "Buscar" !important;
    }
  }

  .EmojiPickerReact [title="Frequently Used"]::after,
  .EmojiPickerReact [aria-label="Frequently Used"]::after {
    content: "Mais Usados" !important;
  }

  .EmojiPickerReact [title="Smileys & People"]::after,
  .EmojiPickerReact [aria-label="Smileys & People"]::after {
    content: "Carinhas e Pessoas" !important;
  }

  .EmojiPickerReact [title="Animals & Nature"]::after,
  .EmojiPickerReact [aria-label="Animals & Nature"]::after {
    content: "Animais e Natureza" !important;
  }

  .EmojiPickerReact [title="Food & Drink"]::after,
  .EmojiPickerReact [aria-label="Food & Drink"]::after {
    content: "Comida e Bebida" !important;
  }

  .EmojiPickerReact [title="Travel & Places"]::after,
  .EmojiPickerReact [aria-label="Travel & Places"]::after {
    content: "Viagem e Lugares" !important;
  }

  .EmojiPickerReact [title="Activities"]::after,
  .EmojiPickerReact [aria-label="Activities"]::after {
    content: "Atividades" !important;
  }

  .EmojiPickerReact [title="Objects"]::after,
  .EmojiPickerReact [aria-label="Objects"]::after {
    content: "Objetos" !important;
  }

  .EmojiPickerReact [title="Symbols"]::after,
  .EmojiPickerReact [aria-label="Symbols"]::after {
    content: "Símbolos" !important;
  }

  .EmojiPickerReact [title="Flags"]::after,
  .EmojiPickerReact [aria-label="Flags"]::after {
    content: "Bandeiras" !important;
  }

  .EmojiPickerReact > div {
    width: 100% !important;
    min-width: 350px !important;
    max-width: none !important;
  }

  .EmojiPickerReact > div > div {
    width: 100% !important;
    min-width: 350px !important;
    max-width: none !important;
  }
`;
