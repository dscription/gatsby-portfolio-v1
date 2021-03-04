import React from "react"
import Section from "../layouts/Section"
import { Button } from "../elements"

const HeroSection = () => {
  return (
    <Section>
      {/* Todo: Add headshot image here */}
      <h1>
        Hi, my name is <strong>Dan Boterashvili</strong>
      </h1>
      <h2>
        I'm a software engineer based in New York, NY. I have a passion for
        creative technology, human movement, and health. I specialize in full
        stack data driven applications.
      </h2>
      <Button>Contact Me</Button>
    </Section>
  )
}

export default HeroSection
