import {createGlobalStyle} from 'styled-components'
import {montserrat, lato, playfair} from './utilities/Type'

const GlobalStyle = createGlobalStyle`
  html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  font: 112.5%/1.45em georgia, serif, sans-serif;
  box-sizing: border-box;
  overflow-y: scroll;
}
body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: hsla(0, 0%, 0%, 0.8);
  font-family: georgia, serif;
  font-weight: normal;
  word-wrap: break-word;
  font-kerning: normal;
  -moz-font-feature-settings: "kern", "liga", "clig", "calt";
  -ms-font-feature-settings: "kern", "liga", "clig", "calt";
  -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
  font-feature-settings: "kern", "liga", "clig", "calt";
}

h1 {
  ${'' /* ${montserrat}
  ${lato} */}
  ${playfair}
}

header {
  ${lato}
}
`

export default GlobalStyle;