import React from "react"
import styled from "styled-components"
import { below, above, whitePurple } from "../utilities"
import { Link } from "gatsby"
import HamburgerIcon from "../../icons/hamburger.png"

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
              <LinkTo href="/#about">About Me</LinkTo>
            </li>
            <li>
              <LinkTo href="/#experience">Experience</LinkTo>
            </li>
            <li>
              <LinkTo href="/#featured">Featured Projects</LinkTo>
            </li>
            {/* <li>
              <LinkTo href="/#projects">Projects</LinkTo>
            </li> */}
            <li>
              <LinkTo href="/#contact">Contact</LinkTo>
            </li>
          </List>
          <div>
            <ResumeButton href="/resume.pdf">Resume</ResumeButton>
          </div>
          <div>
            <HamburgerButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <img
                style={{
                  height: "50px",
                  width: "50px",
                }}
                src={HamburgerIcon}
                alt="hamburger-menu-icon"
              />
            </HamburgerButton>
          </div>
        </Links>
      </Nav>
    </header>
  )
}

const HamburgerButton = styled.button`
  border: none;
  background-color: transparent;
`

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

const LinkTo = styled(Link)`
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
