import React from "react"
import styled from "styled-components"
import expand from "../../icons/expand.png"

export const Expand = ({ link }) => {
  return (
    <a href={link} target="_blank">
      <Icon src={expand} alt="expand icon" />
    </a>
  )
}



const Icon = styled.img`
  color: white;
  background-color: white;
  padding: 3px;
  border-radius: 10px;
`
