import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Featured = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              photo
              github
              deployed
              tech
            }
            html
          }
        }
      }
    }
  `)

  const featuredProjects = data.allMarkdownRemark.edges.filter(
    ({ node }) => node
  )

  return (
    <>
      {featuredProjects &&
        featuredProjects.map(({ node }, index) => {
          const { html, frontmatter } = node
          const { title, photo, github, deployed, tech } = frontmatter

          return (
            <FeaturedContainer>
              <TextContainer>
                <h2>{title}</h2>
                <DescriptionContainer
                  dangerouslySetInnerHTML={{ __html: html }}
                />
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
        })}
    </>
  )
}

export default Featured

const DescriptionContainer = styled.div`
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
