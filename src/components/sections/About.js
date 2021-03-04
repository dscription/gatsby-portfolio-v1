import React from "react"
import styled from "styled-components"
import Section from "../layouts/Section"
import { StaticImage } from "gatsby-plugin-image"

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
        <p>Here are some technologies that I am proficient in:</p>
        <List>
          <li>React</li>
          <li>HTML & CSS</li>
          <li>Gatsby</li>
          <li>Node.js</li>
          <li>Neo4j</li>
          <li>GraphQL</li>
        </List>
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

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  padding: 0px;
  margin: 20px 0px 0px;
  list-style-type: square;
`

const TextContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const ImageContainer = styled.div`
  width: 50%;
`

const Row = styled(Section)`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export default About
