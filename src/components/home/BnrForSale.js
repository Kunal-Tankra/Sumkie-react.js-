import React from 'react'
import BnrForSaleCard from './BnrForSaleCard'

const BnrForSale = (props) => {
    const {bannerForSale, img} = props
    const imgURL = `gallery/images/${img}/`

    return (
        <div className='containerBnrForSale'>
            {bannerForSale && bannerForSale.map((bannerForSale) => {
                return (
                   <BnrForSaleCard key={bannerForSale._id} bannerForSale={bannerForSale} imgURL={imgURL}/>

                )
            })}
        </div>
    )
}

export default BnrForSale
