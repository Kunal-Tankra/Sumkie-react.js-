import React, { useState } from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import Slider from 'react-slick';
import ApiContext from '../../context/apis/apiContext';
import BlogImgsContainer from './BlogImgsContainer';
import OurBlogCard from './OurBlogCard';


const OurBlog = () => {
    const { ourBlog } = useContext(ApiContext)
    const sliderRef = useRef()

    const [height, setHeight] = useState(0);
    const [imgIndex, setImgIndex] = useState(0);
    const [opacity, setOpacity] = useState(0);
    const [display, setDisplay] = useState('none');

    const settings = {
        dots: false,
        infinite: false,
        speed: 200,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    let slidesToShow = 3;

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

    // get the actual height of body
    let bodyHeight = document.body.scrollHeight
    useEffect(() => {
        setHeight(bodyHeight)
    }, [bodyHeight])

    // this is for close the img slider
    const handleCross = ()=>{
        setOpacity('0')
        setTimeout(() => {
           setDisplay('none') 
        }, 500);

    }


    return (
        <>
            <h1 className='heading_N_P'>our last blog</h1>

            <div onClick={handleCross} style={{ height: height + 'px', opacity: opacity, display: display }} className="BlogImgsBg">
            </div>
            <div className="containerOurBlog">

                <Slider ref={sliderRef} {...settings}>

                    {ourBlog && ourBlog.map((ourBlog, index) => {
                        return <OurBlogCard key={ourBlog._id} setDisplay={setDisplay} setOpacity={setOpacity} setImgIndex={setImgIndex} index={index} ourBlog={ourBlog} />

                    })}
                </Slider>


                <BlogImgsContainer setImgIndex={setImgIndex} handleCross={handleCross} setDisplay={setDisplay} setOpacity={setOpacity} opacity={opacity} display={display} imgIndex={imgIndex} ourBlog={ourBlog} />
            </div>
        </>
    )
}

export default OurBlog