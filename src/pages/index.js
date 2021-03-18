import React from "react"
import { ThemeProvider } from "styled-components"
import HeroSection from "../components/sections/HeroSection"
import Layout from "../components/layout"
import About from "../components/sections/About"
import Experience from "../components/sections/Experience"
import FeaturedProjects from "../components/sections/FeaturedProjects"
import Contact from "../components/sections/Contact"
import { lightGreen } from "../components/utilities/Colors"

const theme = {
  colors: {
    primary: "#FFEECB",
    secondary: "#E3F0FF",
    background: "#0a192f",
    backgroundSecondary: lightGreen,
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

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <HeroSection />
      <About />
      <Experience />
      <FeaturedProjects />
      {/* <Projects /> */}
      <Contact />
    </Layout>
  </ThemeProvider>
)

export default IndexPage
