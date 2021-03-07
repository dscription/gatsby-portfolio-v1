import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

   /* The Universal Selector */
   *, /* All elements*/
   *::before, /* All ::before pseudo-elements */
   *::after { /* All ::after pseudo-elements */
    /* height & width will now include border & padding by default
       but can be over-ridden as needed */
    box-sizing: inherit;
   }

  body {
  margin: 0;
  height: 100vh;
  font-family: georgia, serif;
  font-weight: normal;
  word-wrap: break-word;
  font-kerning: normal;
  }

  button:hover {
    background-color: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.background}
  }

  a:hover {
    color: ${props => props.theme.colors.accent}
  }

`

export default GlobalStyle
