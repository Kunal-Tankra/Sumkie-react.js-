import React from 'react'
import { Link } from "react-router-dom";

const OfferBanner = () => {
  return (
    <div className='offerBanner'>
      <img src="gallery/images/offerBanner/offer-banner.jpg" alt="banner" />
      <h1>Buy One, Get One Free <br></br>Prescription Lenses*</h1>
      <Link to="/">SHOp NOW</Link>
      
    </div>
  )
}

export default OfferBanner
