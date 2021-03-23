import React from "react"
import styled from "styled-components"
import github from "../../icons/github.png"

export const Github = ({ link }) => {
  return (
    <a href={link} target="_blank">
      <Icon src={github} alt="github icon" />
    </a>
  )
}

const Icon = styled.img`
  color: white;
  background-color: white;
  padding: 3px;
  border-radius: 10px;
`
