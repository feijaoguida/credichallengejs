import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    font-family: "Montserrat", sans-serif;
    min-height: 100%;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: #222;
    font-size: 14px;
    font-family: "Montserrat", sans-serif;
  }

  button {
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }
  }
`;
