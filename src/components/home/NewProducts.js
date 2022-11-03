import React from 'react'

import NewProductsCard from './NewProductsCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from 'react';


const NewProducts = (props) => {
  const {newProducts, heading} = props
  
  const goggleImgURL = `gallery/images/${newProducts&&newProducts[0].category}/googles/`
  const modalImgURL = `gallery/images/${newProducts&&newProducts[0].category}/modal/`
  const sliderRef = useRef()

  const settings = {
    dots: false,
    infinite: false,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  let slidesToShow = 4;

  // function for next
  function SampleNextArrow(props) {
    const { onClick, slideCount, currentSlide } = props;
    return (
      <button onClick={() => { currentSlide >= slideCount - slidesToShow ? sliderRef.current.slickGoTo(0) : onClick() }} className='companysLogosArrowR'>

        <span className="material-icons-outlined " >
          arrow_forward
        </span>
      </button>

    );
  }

  // function for prev
  function SamplePrevArrow(props) {
    const { onClick, slideCount, currentSlide } = props;
    return (


      <button onClick={() => { currentSlide > 0 ? onClick() : sliderRef.current.slickGoTo(slideCount - slidesToShow) }} className='companysLogosArrowL'>

        <span className="material-icons-outlined " >
          arrow_back
        </span>
      </button>
    );
  }
  
  
  return (
    <>
    <h1 className='heading_N_P' id='#heading_N_P'>{heading}</h1>
      <div className="container_N_P ">
        <Slider ref={sliderRef} {...settings}>

          {newProducts && newProducts.map((newProduct) => {
            return <NewProductsCard key={newProduct._id} product={newProduct} goggleImgURL={goggleImgURL} modalImgURL={modalImgURL} />

          })}
        </Slider>
      </div>

    </>
  )
}

export default NewProducts
