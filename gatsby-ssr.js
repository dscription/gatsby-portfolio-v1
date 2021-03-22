/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from "react"
import { ThemeProvider } from "styled-components"

const theme = {
  colors: {
    primary: "#FFEECB",
    secondary: "#E3F0FF",
    background: "#0a192f",
    backgroundSecondary: "#0a192f",
    accent: "#F9F871",
  },
  fonts: {
    primary: {
      font: `'Playfair Display', serif`,
      small: {
        heading: "60px",
        sub: "30px",
        content: "20px",
        headingHeight: "78px",
        subHeight: "39px",
        contentHeight: "21px",
      },
      medium: {
        heading: "60px",
        sub: "30px",
        content: "20px",
        headingHeight: "78px",
        subHeight: "39px",
        contentHeight: "21px",
      },
      large: {
        heading: "88px",
        sub: "34px",
        content: "24px",
        headingHeight: "115px",
        subHeight: "44px",
        contentHeight: "32px",
      },
    },
    secondary: {
      font: `'Montserrat', sans-serif`,
      heading: "20px",
      sub: "18px",
      content: "16px",
      headingHeight: "26px",
      subHeight: "23px",
      contentHeight: "21px",
    },
    tertiary: {
      font: `'Lato', sans-serif`,
      heading: "30px",
      sub: "16px",
      content: "12px",
      headingHeight: "39px",
      subHeight: "21px",
      contentHeight: "16px",
    },
  },
}

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
)
