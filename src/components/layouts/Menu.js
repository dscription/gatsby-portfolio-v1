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
      <MenuLinks>
        <li>
          <MenuLink onClick={() => setIsMenuOpen(false)} to="/#about">
            About Me
          </MenuLink>
        </li>
        <li>
          <MenuLink onClick={() => setIsMenuOpen(false)} to="/#experience">
            Experience
          </MenuLink>
        </li>
        <li>
          <MenuLink onClick={() => setIsMenuOpen(false)} to="/#featured">
            Featured Projects
          </MenuLink>
        </li>
        <li>
          <MenuLink onClick={() => setIsMenuOpen(false)} to="/#contact">
            Contact
          </MenuLink>
        </li>
      </MenuLinks>
    </animated.div>
  )
}

export default Menu

const MenuLinks = styled.ul`
  list-style-type: none;
  li {
    padding: 10px 0px;
    margin: 0px auto;
  }
`

const MenuLink = styled(Link)`
  color: ${props => props.theme.colors.primary};
  margin: 0px 10px;
  text-decoration: none;
  font-size: 30px;
`
const CloseButton = styled.button`
  border: none;
  background-color: transparent;
`
