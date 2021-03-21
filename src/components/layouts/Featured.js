import React from "react"
import styled from "styled-components"
import { SubHeading } from "../elements"
import { StaticImage } from "gatsby-plugin-image"
import { above, below } from "../utilities"

const Featured = ({ title, html, cover }) => {
  return (
    <FeaturedContainer>
      <SubHeading>{title}</SubHeading>
      <Row>
        <TextContainer>
          <Description dangerouslySetInnerHTML={{ __html: html }} />
          {/* //todo: Add list of project technolgies */}
          {/* //todo: Add link to github and deployed project */}
        </TextContainer>
        <ImageContainer>
          <StaticImage
            src="../../images/tux.png"
            alt={`${title} project photo`}
            width={600}
            height={350}
          />
        </ImageContainer>
      </Row>
    </FeaturedContainer>
  )
}

export default Featured

const Row = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
  ${below.med`
    flex-direction: column;
  `}
`

const Description = styled.div`
  display: flex;
  background: rgba(140, 134, 133, 0.3);
  color: ${props => props.theme.colors.secondary};
  min-height: 200px;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 0px 10px;
`

const FeaturedContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0px;
`

const TextContainer = styled.div`
  width: 100%;
  align-items: center;
  text-align: center;
  justify-content: center;
  order: 2;
  padding-right: 10px;
  
  ${above.med`
    order:1;
    
  `}
`
const ImageContainer = styled.div`
  width: 100%;
  order: 1;
  opacity: 0.2;
  &:hover {
    opacity: 1;
  }
  ${above.med`
   
    order: 2;
  
  `}
`
