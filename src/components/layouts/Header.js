import React from "react"
import styled from "styled-components"
import { navy, peach } from "../utilities"

const Header = ({ className }) => {
  return (
    <header className={className}>
      <nav>
        <span>Dan Boterashvili</span>
        <ol>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
          <li>Link 4</li>
        </ol>
      </nav>
    </header>
  )
}

export default styled(Header)`
  background: ${navy};
  color: ${peach};
`
