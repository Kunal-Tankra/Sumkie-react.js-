import React from 'react'
import { Link } from 'react-router-dom'

const BnrForSaleCard = (props) => {
    const {bannerForSale, imgURL} = props
    return (
        <div  className="banner" >
            <div className="BnrImg">

                <img src={imgURL + bannerForSale.img} alt="banner" />
            </div>
            <p>{bannerForSale.discount}</p>
            <h2>{bannerForSale.title}</h2>
            <Link to="/">shop now</Link>
        </div>
    )
}

export default BnrForSaleCard
