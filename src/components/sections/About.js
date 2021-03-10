import React from "react"
import styled from "styled-components"
import Section from "../layouts/Section"
import { StaticImage } from "gatsby-plugin-image"
import { SubHeading, Content } from "../elements"
import { above } from "../utilities"

const About = () => {
  return (
    <Row id="about">
      <TextContainer>
        <SubHeading>Who am I?</SubHeading>
        <Content>
          I am a personal trainer and visual artist turned software engineer. As
          a trainer I have spent countless hours working with people on a
          personal level helping them create lasting change in their lives. I am
          passionate about the intersection between human movement, creative
          expression, and technology. This experience has taught me to be
          empathetic, curious, and persistent when it comes to finding solutions
          to complex problems. I strive to create products and experiences that
          bring people together.
        </Content>
        <Content>Here are some technologies that I am currently using:</Content>
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
          style={{ borderRadius: 200 }}
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
  margin: 0px auto;
  list-style-type: square;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px auto;
  order: 2;
  /* Above Medium Breakpoint */
  ${above.med`
    order: 1;
    width: 60%;
    text-align: center;
    `}
`
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0px auto;
  order: 1;
  /* Above Medium Breakpoint */
  ${above.med`
    order: 2;
    width: 40%;
    padding: 20px;
    `}
`

const Row = styled(Section)`
  ${above.med`
    flex-direction: row;
    `}
`

export default About
