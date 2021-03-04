import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import Section from "../layouts/Section"

const About = () => {
  return (
    <Row>
      <TextContainer>
        <h2>Who am I?</h2>
        <p>
          I am a personal trainer and visual artist turned software engineer. As
          a trainer I have spent countless hours working with people on a
          personal level helping them create lasting change in their lives. I am
          passionate about the intersection between human movement, creative
          expression, and technology. This experience has taught me to be
          empathetic, curious, and persistent when it comes to finding solutions
          to complex problems. I strive to create products and experiences that
          bring people together.
        </p>
      </TextContainer>
      <ImageContainer>
        <StaticImage
          src="../../images/headshot.jpeg"
          alt="Dan Boterashvili's Headshot"
          width={350}
          height={350}
        />
      </ImageContainer>
    </Row>
  )
}

const TextContainer = styled.div`
  width: 50%;
`
const ImageContainer = styled.div`
  width: 50%;
`

const Row = styled(Section)`
  display: flex;
  flex-direction: row;
`

export default About
