import React from 'react'
import { useState } from 'react';
import NavbarList from './NavbarList'
import NavIcon from './NavIcon'

const Navbar = () => {
  const [scrollStyle, setScrollStyle] = useState(
    {
      boxShadow: "",
      top: "-150px"
    }
  );
  const [goToTopStyle, setGoToTopStyle] = useState({
    display: 'none'

  });

  // scroll function for scroll bar
  window.addEventListener('scroll', () => {
    let scrollY = window.scrollY
    let setStyle;
    if (scrollY > 228) {
      setStyle = {
        ...scrollStyle,
        boxShadow: "0px 2px 15px 0px grey",
        top: "-0.1px"
      }
      setGoToTopStyle({...goToTopStyle, display: 'block'})
    }
    
    else {
      setStyle = {
        ...scrollStyle,
        boxShadow: "",
        top: "-150px"
      }

        setGoToTopStyle({...goToTopStyle, display: 'none'})
        
    }
    setScrollStyle(setStyle)

  })

  return (
    <>
      <div style={scrollStyle} className="navbar">
        <img src="https://demo.codezeel.com/prestashop/PRS18/PRS180433/img/logo-1640238095.jpg" alt="compony logo" />
        <NavbarList />
        <NavIcon />
      </div>
      <i style={goToTopStyle} class="fa fa-chevron-up goToTop" aria-hidden="true" onClick={()=>document.documentElement.scrollTop = 0}></i>
    </>
  )
}

export default Navbar
