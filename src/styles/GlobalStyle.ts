import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
    overflow-x: hidden;
  }

  body {
    font-family: 'Nanum Myeongjo', serif;
    font-weight: 400;
    line-height: 1.5;
  }

  input, button {
    font-family: inherit;
    border: none; 
  }

  input {
    outline: none;
  }  

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
