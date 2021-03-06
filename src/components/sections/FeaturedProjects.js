import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Featured from "../layouts/Featured"
import Section from "../layouts/Section"
import { Button, Heading, SubHeading, Content } from "../elements"

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
    <Section>
      <SubHeading>FeaturedProjects</SubHeading>
      {featuredProjects &&
        featuredProjects.map(({ node }, index) => {
          const { html, frontmatter } = node
          const { title, photo, github, deployed, tech } = frontmatter

          return <Featured title={title} html={html} />
        })}
    </Section>
  )
}

export default FeaturedProjects
