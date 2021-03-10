import React from "react"
import styled from "styled-components"
import {below, above} from '../utilities'
import {Link} from 'gatsby'

const Header = ({ className, setIsMenuOpen, isMenuOpen }) => {
  return (
    <header className={className}>
      <Nav>
        <div>
          <Logo href="">Dan Boterashvili</Logo>
        </div>
        <Links>
          <List>
            <li>
              <Linka href="/#about">About Me</Linka>
            </li>
            <li>
              <Linka href="">Experience</Linka>
            </li>
            <li>
              <Linka href="">Featured Projects</Linka>
            </li>
            <li>
              <Linka href="">Projects</Linka>
            </li>
            <li>
              <Linka href="">Contact</Linka>
            </li>
          </List>
          <div>
            <ResumeButton>Resume</ResumeButton>
          </div>
          <div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>Open Menu</button>
          </div>
        </Links>
      </Nav>
    </header>
  )
}

const Logo = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.primary};
  font-size: 35px;
`

const ResumeButton = styled.a`
  border: 2px solid;
  border-color: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.accent};
  padding: 5px;
  border-radius: 5px;
  font-size: 20px;
  // todo: give button a hover state.
  // todo: give button a border-radius.
  ${below.large`
    display: none;
  `}
`

const Linka = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.primary};
  margin: 0px 10px;
`

const List = styled.ol`
  display: flex;
  align-items: center;
  list-style: none;

  ${below.large`
    li {
      display: none;
    }
  `}
`

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${above.large`
    button {
      display: none;
    }
  `}
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
`

export default styled(Header)`
  display: flex;
  justify-content: center;
  height: 100px;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.primary.font};
  font-size: ${props => props.theme.fonts.primary.content};
  line-height: ${props => props.theme.fonts.primary.contentHeight};
  padding: 0px 30px;
  align-items: center;
`
