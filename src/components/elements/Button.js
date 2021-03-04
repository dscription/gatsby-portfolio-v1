import React from 'react'
import styled from 'styled-components'

export const Button = styled.button`
  height: 50px;
  padding: 5px;
  color: ${props => props.theme.colors.primary};
  background: inherit;
  border: 4px solid;
  border-color: ${props => props.theme.colors.accent};
  border-radius: 5px;
  font-size: 20px;
`

