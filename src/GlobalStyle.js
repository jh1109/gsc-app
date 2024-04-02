import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  main {
    height: 100vh;
    background: white;
    margin: auto;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .mainContent {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }

  ul,li {
    list-style: none;
  }

  button, input {
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    font: inherit;
  }

  input {
    width: 100%;
    height: 100%;
  }

  a{
    text-decoration: none;
    color: black;
  }

  .a11yHidden {
    overflow: hidden;
    position: absolute !important;
    clip: rect(0, 0, 0, 0);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
  }

  .boldBlue {
    font-weight: 600;
    color: blue;
  }
  .bold {
    font-weight: 600;
  }

  .bigfont1 {
    font-size: 1.2rem;
  }
  .bigfont2 {
    font-size: 1.4rem;
  }
  .bigfont3 {
    font-size: 1.6rem;
  }
  .smallfont1 {
    font-size: 0.8rem;
  }
  .smallfont2 {
    font-size: 0.6rem;
  }
`;

export default GlobalStyle;