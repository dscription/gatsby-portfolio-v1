import React from "react"
import styled from "styled-components"
import { above } from "../utilities"

export const Heading = styled.h1`
  font-family: ${props => props.theme.fonts.primary.font};
  font-size: ${props => props.theme.fonts.primary.small.heading};
  line-height: ${props => props.theme.fonts.primary.small.headingHeight};
  margin: 10px 0px;

  ${above.med`
  font-family: ${props => props.theme.fonts.primary.font};
  font-size: ${props => props.theme.fonts.primary.large.heading};
  line-height: ${props => props.theme.fonts.primary.large.headingHeight};
  margin: 10px 0px;
  `};


`
