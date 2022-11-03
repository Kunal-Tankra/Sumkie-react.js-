import React, { useState } from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import ApiContext from '../../context/apis/apiContext';



const NavIcon = () => {
  const { cartNum } = useContext(ApiContext)
  
  // search and close icons state
  const [icons, setIcons] = useState('search');
  const [styleSearch, setStyleSearch] = useState(0);
  const [fontSize, setfontSize] = useState('');

  useEffect(() => {
    setfontSize('changeFontSize')
    setTimeout(() => {
      
      setfontSize('')
    },200);
  },[cartNum])

  const handleSearchBox = () => {
    if (icons === 'search') {
      setIcons('close')
      setStyleSearch(1)
    }
    else {
      setIcons('search')
      setStyleSearch(0)
    }

  }


  return (
    <div className='navIcons'>
      <span className="material-icons-outlined" id="searchIcon" onClick={handleSearchBox}>{icons}
      </span>
      <div className="searchBox" style={{ transform: `scale(${styleSearch})` }}>
        <input type="text" placeholder='search...' />
        <span className="material-icons-outlined" id="searchIcon">search
        </span>
      </div>

      <span className="material-icons-outlined" id="searchIcon">person_add_alt
      </span>
      <span className="material-icons-outlined" id="searchIcon">favorite_border
      </span>
      <Link to="/cart">
        <span className="material-icons-outlined" id="searchIcon"><span className={`cartNum ${fontSize}`}>{cartNum}</span> shopping_bag
        </span>
      </Link>
    </div>
  )
}

export default NavIcon
