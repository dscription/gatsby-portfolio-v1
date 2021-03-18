import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useSpring, animated } from "react-spring"
import Close from "../../icons/close.svg"
import "./menu.css"

const Menu = ({ isMenuOpen, setIsMenuOpen }) => {
  const menuAnimation = useSpring({
    transform: isMenuOpen
      ? `translate3d(0,0,0) scale(1)`
      : `translate3d(100%, 0, 0) scale(0.6)`,
  })

  return (
    <animated.div style={menuAnimation} className="nav-menu">
      <CloseButton onClick={() => setIsMenuOpen(false)}>
        <img src={Close} />
      </CloseButton>
      <ul>
        <li>
          <LinkTo onClick={() => setIsMenuOpen(false)} to="/#about">
            About Me
          </LinkTo>
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
      </ul>
    </animated.div>
  )
}

export default Menu

const LinkTo = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.primary};
  margin: 0px 10px;
`
const CloseButton = styled.button`
  border: none;
  background-color: transparent;
`
