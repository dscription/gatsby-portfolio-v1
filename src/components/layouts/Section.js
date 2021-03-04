import React from "react"
import styled from "styled-components"

const Section = styled.section`
  height: 80vh;
  h1 {
    font-family: ${props => props.theme.fonts.primary.font};
    font-size: ${props => props.theme.fonts.primary.header};
  }
  h2 {
    font-size: ${props => props.theme.fonts.primary.sub};
  }
  p {
    font-size: ${props => props.theme.fonts.primary.content};
  }
  text-align: center;
`

export default Section
