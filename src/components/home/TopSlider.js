import React, { useContext } from 'react'
import ApiContext from '../../context/apis/apiContext'
import Slider from "react-slick";


const TopSlider = () => {
    const imgUrl = 'gallery/images/sliderImages/'
    const { topSlider } = useContext(ApiContext)

    // function for next
    function SampleNextArrow(props) {
        const { onClick } = props;
        return (
            <span className="material-icons-outlined TSArrowR" onClick={onClick}>
                keyboard_double_arrow_right
            </span>
        );
    }

    // function for prev
    function SamplePrevArrow(props) {
        const { onClick } = props;
        return (
            <span className="material-icons-outlined TSArrowL" onClick={onClick}>keyboard_double_arrow_left</span>

        );
    }

    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        dots: true,
        fade: true,
        infinite: true,
        speed: 700,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        pauseOnDotsHover: true,
        
        customPaging: i => (
            <div className='navBoxesTS'> </div>

        ),
        
    };

    return (
        <>
            <Slider {...settings}>
                {topSlider && topSlider.map((topSlider, index) => {
                    return (
                        <div key={index} className={`topSlider handleStyleTS`}>                 {/* class(handleStyleTS) for style */}

                            <img className='topImg' src={topSlider && imgUrl + topSlider.img} alt="img" />

                            <div className='headingContainer'>

                                <h1 className='topSHeading'>New Trending Goggles<br />{topSlider && topSlider.title}</h1>
                                <h3 className='topSDiscount'>Up To {topSlider && topSlider.discountPer} Off Best Selling At <span style={{ color: '#ed0f0f' }}> {topSlider && topSlider.discountRate}</span></h3>

                                <button>shop now</button>

                            </div>

                            <div className="containerNavBoxesTS">

                                {/* {topSlider && topSlider.map((elm, index) => { return <span key={index} style={{ background: index === slideCount ? "rgb(237, 15, 15)" : 'white' }} className='navBoxesTS' onClick={() => { handleNavBoxClick(index) }}> </span> })} */}
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </>
    )
}

export default TopSlider
