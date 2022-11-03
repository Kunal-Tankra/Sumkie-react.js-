import React, { useEffect } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useRef } from 'react';

const Wayfarer = (props) => {
  const ref = useRef(null)
  const capitalize = (word) => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase()

  }
  useEffect(() => {

    document.title = `Sumkie - ${capitalize(props.title)}`
    console.log(ref.current)
  })

  
  
  return (
    <div>
      <h2> Wayfarer</h2>
        
    </div>
  )
}

export default Wayfarer


