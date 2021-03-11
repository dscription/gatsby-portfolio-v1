import React from "react"
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
      <button onClick={() => setIsMenuOpen(!isMenuOpen)}>Close</button>
      <ul>
        <li>Link</li>
        <li>Link</li>
        <li>Link</li>
        <li>Link</li>
      </ul>
    </animated.div>
  )
}

export default Menu
