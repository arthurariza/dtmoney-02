import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --red: #e52e4d;
    --green: #33cc95;
    --blue: #5429cc;
    --blue-light: #6933ff;

    --text-tile: #363f5f;
    --text-body: #969cb3;
    
    --background: #F0F2F5;
    --shape: #ffffff;
  }

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  a {
  color: inherit;
  text-decoration: none;
}

li {
  list-style: none;
}

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }  
`;