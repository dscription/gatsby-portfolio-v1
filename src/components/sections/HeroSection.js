import React from "react"
import Section from "../layouts/Section"
import { Button, Heading, SubHeading, Content } from "../elements"

const HeroSection = () => {
  return (
    <Section>
      <SubHeading>Hi, my name is,</SubHeading>
      <Heading>Dan Boterashvili</Heading>
      <Content>
        I'm a software engineer based in New York, NY. I have a passion for
        creative technology, human movement, and health. I specialize in full
        stack data driven applications.
      </Content>
      <Button>Contact Me</Button>
    </Section>
  )
}

export default HeroSection
