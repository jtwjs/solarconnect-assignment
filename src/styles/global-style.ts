import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  html {
    width: 100%;
    height: 100%;
  }
  
  body {
    width: 100%;
    min-height: 100%;
    background: #eee;
  }
  
  a, a:hover, a:focus {
    color: inherit;
    text-decoration: none;
  }
  
  input,textarea {
    outline: none;
    border: 0;
  }
  
  button {
    background-color: transparent;
    border: none;
    outline: none;
  }
  
  ol, ul, li {
    list-style: none;
  }
  
  img {
    width: 100%;
  }
  
  [tabindex]:focus-visible,
  label:focus-visible,
  button:focus-visible{
    outline: none;
    box-shadow: 0 0 0 3px rgba(0,0,0, 0.65);
  }

  .a11y {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
  `;