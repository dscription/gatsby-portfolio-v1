import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Section from "../layouts/Section"
import { Button, Heading, SubHeading, Content } from "../elements"

const Experience = () => {
  const [jobIndex, setJobIndex] = useState(0)
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/jobs/" } }) {
        edges {
          node {
            frontmatter {
              title
              company
              accomplishments
              date
            }
          }
        }
      }
    }
  `)

  const jobs = data.allMarkdownRemark.edges.filter(({ node }) => node)

  const job = jobs[jobIndex].node.frontmatter
  {
    console.log(job)
  }

  return (
    <Section>
      <SubHeading>Experience</SubHeading>
      <Flex>
        <JobsContainer>
          <Jobs>
            {jobs &&
              jobs.map(({ node }, index) => {
                const { frontmatter } = node
                const { title, company, date, accomplishments } = frontmatter

                return (
                  <li key={index} onClick={() => setJobIndex(index)}>
                    {company}
                  </li>
                )
              })}
          </Jobs>
        </JobsContainer>
        <AccomplishmentContainer>
          <Content>{job.company}</Content>
          <Content>{job.date}</Content>
          <Accomplishments>
            {job.accomplishments.map((accomplishment, index) => (
              <li key={index}>{accomplishment}</li>
            ))}
          </Accomplishments>
        </AccomplishmentContainer>
      </Flex>
    </Section>
  )
}

const AccomplishmentContainer = styled.div``

const Accomplishments = styled.ul`
  li {
    list-style: none;
  }
`

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-content: center;
`
const JobsContainer = styled.div`
  display: flex;
`
const Jobs = styled.ul`
  display: flex;
  text-decoration: none;
  list-style: none;

  li {
    padding: 10px;
    min-width: 80px;
    border: 2px solid white;
    /* add a hover state */
  }
`

export default Experience
