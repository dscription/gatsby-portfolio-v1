import React from "react"
import styled from "styled-components"
import { SubHeading } from "../elements"
import { StaticImage } from "gatsby-plugin-image"
import { above } from "../utilities"

const Featured = ({ title, html }) => {
  return (
    <FeaturedContainer>
      <TextContainer>
        <SubHeading>{title}</SubHeading>
        <DescriptionContainer dangerouslySetInnerHTML={{ __html: html }} />
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

const DescriptionContainer = styled.div`
  display: flex;
  background: ${props => props.theme.colors.backgroundSecondary};
  color: ${props => props.theme.colors.secondary};
  min-height: 100px;
  justify-content: center;
`

const FeaturedContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0px;
  ${above.med`
    flex-direction: row;
  `}
`

const TextContainer = styled.div`
  width: 100%;
  align-items: center;
  text-align: center;
  order: 2;
  ${above.med`
    order:1;
  `}
`
const ImageContainer = styled.div`
  width: 100%;
  order: 1;
  opacity: 0.2;
  &:hover {opacity: 1}
  ${above.med`
    order: 2
  `}
`
