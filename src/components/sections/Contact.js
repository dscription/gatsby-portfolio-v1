import React from "react"
import styled from "styled-components"
import Section from "../layouts/Section"
import { Button, SubHeading, Content } from "../elements"

const Contact = () => {
  return (
    <Section id="contact">
      <SubHeading>Contact Me</SubHeading>
      <Content>
        I am currently looking for new opportunities. I am always available to
        explore new ideas and meet new people. Feel free to reach out and I will
        get back to you promptly.
      </Content>
      <EmailMe as="a" href="mailto:danb.dul@gmail.com">
        Email Me!
      </EmailMe>
    </Section>
  )
}

export default Contact

const EmailMe = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`
