import React, { useEffect } from 'react'
import BnrForSale from './BnrForSale'
import CmpnyLogos from './CmpnyLogos'
import NewProducts from './NewProducts'
import OfferBanner from './OfferBanner'
import Services from './Services'
import TopSlider from './TopSlider'
import { useContext } from 'react'
import ApiContext from '../../context/apis/apiContext'
import Team from './Team'
import OurBlog from './OurBlog'
import Footer from './Footer'

const Home = (props) => {
  const capitalize = (word) => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase()
  }
  useEffect(() => {
    document.title = `Sumkie - ${capitalize(props.title)}`
  })

  const { newProducts, featuredProducts, bannerForSale, scndBnrForSale } = useContext(ApiContext)  // this is from context api
 

  return (
    <div>
      <TopSlider/>
      <BnrForSale bannerForSale={bannerForSale} img={'bannersForSale'}/>
      <CmpnyLogos/>
      <NewProducts newProducts={newProducts} heading={'new products'}/>
      <OfferBanner/>
      <Services/>
      <NewProducts newProducts={featuredProducts} heading={'featured products'} />
      <BnrForSale bannerForSale={scndBnrForSale} img={'secondBAnnerForDiscount'}/>
      <Team/>
      <OurBlog/>
      <Footer/>
    </div>
  )
}

export default Home
