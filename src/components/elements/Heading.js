import React from "react"
import styled from "styled-components"

export const Heading = styled.h1`
  font-family: ${props => props.theme.fonts.primary.font};
  font-size: ${props => props.theme.fonts.primary.small.heading};
  line-height: ${props => props.theme.fonts.primary.small.headingHeight};
`
