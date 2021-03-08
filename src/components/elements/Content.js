import React from "react"
import styled from "styled-components"

export const Content = styled.p`
  font-size: ${props => props.theme.fonts.primary.small.content};
  line-height: ${props => props.theme.fonts.primary.small.contentHeight};
`
