import styled from "styled-components"
import { above } from "../utilities"

export const Content = styled.p`
  font-size: ${props => props.theme.fonts.primary.small.content};
  line-height: ${props => props.theme.fonts.primary.small.contentHeight};
  margin: 10px 0px;

  ${above.med`
  font-size: ${props => props.theme.fonts.primary.large.content};
  line-height: ${props => props.theme.fonts.primary.large.contentHeight};
  margin: 10px 0px;
  `}
`
