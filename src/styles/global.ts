import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: ${theme.colors.background};
    -webkit-font-smoothing: antialiased;
    font: 400 1rem 'Roboto', sans-serif;
  }


  input, button, textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 1.32rem;
  }

  button {
    border: none;
    cursor: pointer;
    background: transparent;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  h2 {
    font-size: 2.13rem;
    color: ${theme.colors.secondaryColorText};
    font-weight: 700;
  }

  .Toastify__toast-container {
    width: inherit !important;
  }
`;
