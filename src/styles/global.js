import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root{
    font-size: 60%;

    --color-primary: #0C29D0;
    --color-secondary: #696D8C;
    --color-text:  #312F5F;
    --color-light-blue: #F5F5FB;
    --color-light-blue02: #F5F6FF;
    --color-green: #0DC78B;
    --color-secondary-button: #B6B9D0;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--color-light-blue02);
  }

  body, input, button{
    font: 400 1.6rem 'Lato';
    color: var(--color-text);
    outline: none;
  }

  @media (min-width: 720px) {
    :root {
      font-size: 62.5%;
    }
  }
`;
