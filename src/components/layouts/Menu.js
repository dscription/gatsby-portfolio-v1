import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useSpring, animated } from "react-spring"
import "./menu.css"

const Menu = ({ isMenuOpen, setIsMenuOpen }) => {
  const menuAnimation = useSpring({
    transform: isMenuOpen
      ? `translate3d(0,0,0) scale(1)`
      : `translate3d(100%, 0, 0) scale(0.6)`,
  })

  return (
    <animated.div style={menuAnimation} className="nav-menu">
      <button onClick={() => setIsMenuOpen(false)}>Close</button>
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
