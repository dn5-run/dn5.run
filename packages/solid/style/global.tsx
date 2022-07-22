import { createGlobalStyles } from 'solid-styled-components'

export const GlobalStyles = createGlobalStyles`
  *,
  ::before,
  ::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: inherit;
  }

  html {
    word-break: break-word;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: none;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    font-family: 'Inter', 'Zen Kaku Gothic New', 'sans-serif';
    font-size: 16px;
    line-height: 1.5;
    word-break: break-word;
  }

  ol,
  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a:hover {
      text-decoration: none;
    }
  }

  img {
    height: auto;
    max-width: 100%;
  }
`
