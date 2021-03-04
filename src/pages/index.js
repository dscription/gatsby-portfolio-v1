import React from "react"
import { ThemeProvider } from "styled-components"
import HeroSection from "../components/sections/HeroSection"
import Layout from "../components/layout"
import About from "../components/sections/About"
import Experience from "../components/sections/Experience"
import FeaturedProjects from "../components/sections/FeaturedProjects"
import Projects from "../components/sections/Projects"
import Contact from "../components/sections/Contact"

const theme = {
  colors: {
    primary: "#FFEECB",
    secondary: "#E3F0FF",
    background: "#0a192f",
    accent: "#F9F871",
  },
  fonts: {
    primary: {
      font: `'Playfair Display', serif`,
      header: "88px",
      sub: "34px",
      content: "20px",
    },
    secondary: {
      font: `'Montserrat', sans-serif`,
      header: "20px",
      sub: "18px",
      content: "16px",
    },
    tertiary: {
      font: `'Lato', sans-serif`,
      header: "30px",
      sub: "16px",
      content: "12px",
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
      <Projects />
      <Contact />
    </Layout>
  </ThemeProvider>
)

export default IndexPage
