import React from "react"
import styled from "styled-components"
import {  lato } from "../utilities"

const Header = ({ className }) => {
  return (
    <header className={className}>
      <Nav>
        <div>
          <a href="">Dan Boterashvili</a>
        </div>
        <Links>
          <List>
            <li>
              <a href="">About Me</a>
            </li>
            <li>
              <a href="">Experience</a>
            </li>
            <li>
              <a href="">Featured Projects</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </List>
          <div>
            <ResumeButton>Resume</ResumeButton>
          </div>
        </Links>
      </Nav>
    </header>
  )
}

const ResumeButton = styled.a`
  border: 2px solid white;
`

const List = styled.ol`
  display: flex;
  align-items: center;
  list-style: none;
`

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
`

export default styled(Header)`
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.primary.font}
`
