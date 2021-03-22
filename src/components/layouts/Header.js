import React from "react"
import styled from "styled-components"
import { below, above } from "../utilities"
import { Link } from "gatsby"
import Hamburger_SVG from "../../icons/hamburger.svg"
import DB_SVG from "../../icons/db_svg.svg"

const Header = ({ className, setIsMenuOpen, isMenuOpen }) => {
  return (
    <header className={className}>
      <Nav>
        <div>
          <Logo to="">
            <img style={{ height: "60px" }} src={DB_SVG} alt="db logo icon" />
          </Logo>
        </div>
        <Links>
          <List>
            <li>
              <LinkTo to="/#about">About Me</LinkTo>
            </li>
            <li>
              <LinkTo to="/#experience">Experience</LinkTo>
            </li>
            <li>
              <LinkTo to="/#featured">Featured Projects</LinkTo>
            </li>
            <li>
              <LinkTo to="/#contact">Contact</LinkTo>
            </li>
          </List>
          <div>
            <ResumeButton href="/resume.pdf">Resume</ResumeButton>
          </div>
          <div>
            <HamburgerButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <img
                style={{
                  width: "65%",
                  height: "65%",
                }}
                src={Hamburger_SVG}
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
  :hover {
    background: none;
    border: 2px solid ${props => props.theme.colors.primary};
    border-radius: 10px;
  }
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
  font-size: ${props => props.theme.fonts.primary.large.content};
  line-height: ${props => props.theme.fonts.primary.contentHeight};
  padding: 0px 30px;
  align-items: center;
`
