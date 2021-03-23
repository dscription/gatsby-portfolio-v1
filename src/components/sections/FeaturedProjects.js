import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Featured from "../layouts/Featured"
import Section from "../layouts/Section"
import { SubHeading } from "../elements"

const FeaturedProjects = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/featured/" } }) {
        edges {
          node {
            frontmatter {
              title
              photo
              github
              deployed
              tech
              photo
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
    <Container id="featured">
      <SubHeading>Featured Projects</SubHeading>
      {featuredProjects &&
        featuredProjects.map(({ node }, index) => {
          const { html, frontmatter } = node
          const { title, photo } = frontmatter

          return (
            <Featured title={title} html={html} key={index} photo={photo} />
          )
        })}
    </Container>
  )
}

const Container = styled(Section)``

export default FeaturedProjects
