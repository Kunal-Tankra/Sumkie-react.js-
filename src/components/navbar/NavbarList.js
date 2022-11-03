import React from 'react'
import { Link } from "react-router-dom";

const NavbarList = () => {
  return (
    <nav>
      <ul className='navlist'>
        <li>
          <Link to='/'>home</Link>
        </li>
        <li>
          <Link to='/sunglasses'>sunglasses</Link>
        </li>
        <li>
          <Link to='/wayfarer'>wayfarer</Link>
        </li>
        <li>
          <Link to='/cateye'>cat eye</Link>
        </li>
        <li>
          <Link to='/pilotstyle'>pilot style</Link>
        </li>
        <li>
          <Link to='/blog'>blog</Link>
        </li>
        <li>
          <Link to='/more'>more</Link>
        </li>
      </ul>

    </nav>
  )
}

export default NavbarList

