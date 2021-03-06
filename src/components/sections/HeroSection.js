import React from "react"
import Section from "../layouts/Section"
import { Button, Heading, SubHeading } from "../elements"

const HeroSection = () => {
  return (
    <Section>
      <Heading>
        Hi, my name is <strong>Dan Boterashvili</strong>
      </Heading>
      <SubHeading>
        I'm a software engineer based in New York, NY. I have a passion for
        creative technology, human movement, and health. I specialize in full
        stack data driven applications.
      </SubHeading>
      <Button>Contact Me</Button>
    </Section>
  )
}

export default HeroSection
