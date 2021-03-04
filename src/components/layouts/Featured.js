import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Featured = () => {
  return (
    <FeaturedContainer>
      <TextContainer>
        <h2>Project Name</h2>
        <DescriptionContainer>
          <p>Here is a bunch of text about my project</p>
        </DescriptionContainer>
        {/* //todo: Add list of project technolgies */}
        {/* //todo: Add link to github and deployed project */}
      </TextContainer>
      <ImageContainer>
        <StaticImage
          src="../../images/headshot.jpeg"
          alt="Dan Boterashvili's Headshot"
          width={600}
          height={350}
        />
      </ImageContainer>
    </FeaturedContainer>
  )
}

export default Featured

const DescriptionContainer = styled.p`
  background: ${props => props.theme.colors.backgroundSecondary};
  color: ${props => props.theme.colors.secondary};
  min-height: 100px;
  width: 70%;
`

const FeaturedContainer = styled.div`
  height: 50vh;
  display: flex;
`

const TextContainer = styled.div`
  width: 50%;
  align-items: center;
  text-align: center;
`
const ImageContainer = styled.div`
  width: 50%;
`
