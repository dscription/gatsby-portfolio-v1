import React from 'react'
import styled from 'styled-components'

export const Button = styled.button`
  height: 75px;
  width: 200px;
  padding: 5px;
  color: ${props => props.theme.colors.accent};
  background: inherit;
  border: 4px solid;
  border-color: ${props => props.theme.colors.accent};
  border-radius: 5px;
  font-size: 30px;
  margin: 10px auto;
`

