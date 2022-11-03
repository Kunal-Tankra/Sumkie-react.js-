import React from 'react'
import { useContext } from 'react'
import ApiContext from '../../context/apis/apiContext'
import Slider from "react-slick";
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const CmpnyLogos = () => {
    const { anothercompanys } = useContext(ApiContext)
    const [slidesToShow, setSlidesToShow] = useState(6);
    const sliderRef = useRef()

    let settings = {
        dots: false,
        infinite: false,
        speed: 900,
        slidesToShow: 6,
        slidesToScroll: 1,
        swipeToSlide: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1407,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,

                }
            },
            {
                breakpoint: 812,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,

                }
            },
        ]

    };

    
    let screenWidth;

    useEffect(() => {
        screenWidth = window.screen.width;
        checkWidth()


    }, []);

    const checkWidth = ()=>{
        if(screenWidth>=1407){
            setSlidesToShow(6)
        }
        if (screenWidth < 1407 ) {
            setSlidesToShow(4)
        }
        if (screenWidth < 1100 ) {
            setSlidesToShow(3)
        }
        if (screenWidth < 812 ) {
            setSlidesToShow(2)
        }
    }
    window.onresize = () => {
        screenWidth = window.screen.width
        checkWidth()
    }



    // function for next
    function SampleNextArrow(props) {
        const { onClick, slideCount, currentSlide } = props;
        return (
            <button onClick={() => { currentSlide < slideCount - slidesToShow ? onClick() : sliderRef.current.slickGoTo(0) }} className='companysLogosArrowR'>

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


            <button onClick={() => { currentSlide <= 0 ? sliderRef.current.slickGoTo(slideCount - slidesToShow) : onClick() }} className='companysLogosArrowL'>

                <span className="material-icons-outlined " >
                    arrow_back
                </span>
            </button>
        );
    }



    return (
        <div className='logosContainer'>
            <Slider ref={sliderRef}  {...settings}>

                {anothercompanys && anothercompanys.map((anothercompanys) => {
                    return (
                        <Link key={anothercompanys._id} to="/">
                            <img src={`gallery/logos/anotherCompanysLogos/${anothercompanys.img}`} alt="company logo" />
                        </Link>
                    )
                })}

            </Slider>
        </div>
    )
}

export default CmpnyLogos
