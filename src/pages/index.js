import React from "react"
import HeroSection from "../components/sections/HeroSection"
// import { Link } from "gatsby"
import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
import About from "../components/sections/About"
import Experience from "../components/sections/Experience"
import FeaturedProjects from "../components/sections/FeaturedProjects"
import Projects from "../components/sections/Projects"
import Contact from "../components/sections/Contact"
import GlobalStyle from "../components/global"

const IndexPage = () => (
  <Layout>
    <HeroSection />
    <About />
    <Experience />
    <FeaturedProjects />
    <Projects />
    <Contact />
    <GlobalStyle />
  </Layout>
)

export default IndexPage
