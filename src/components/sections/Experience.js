import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Section from "../layouts/Section"

const Experience = () => {
  // todo: track which job has been selected, and render the appropriate data in the paragraph.
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
  return (
    <Section>
      <h2>Experience</h2>
      {/* //todo: map through job titles and render them as a list */}
      <Flex>
        <JobsContainer>
          <Jobs>
            <li>Job</li>
            <li>Job</li>
            <li>Job</li>
          </Jobs>
        </JobsContainer>
        <AccomplishmentContainer>
          <p>Job title</p>
          <p>Date</p>
          <Accomplishments>
            <li>Accomplished</li>
            <li>Accomplished</li>
            <li>Accomplished</li>
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
