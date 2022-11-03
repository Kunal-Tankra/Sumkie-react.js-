import React from 'react'
import { useContext } from 'react'
import ApiContext from '../../context/apis/apiContext'
import Slider from "react-slick";
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Team = () => {
    const { team } = useContext(ApiContext)

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [nav3, setNav3] = useState(null);

    let slider1 = useRef(null)
    let slider2 = useRef(null)
    let slider3 = useRef(null)

    useEffect(() => {
        setNav1(slider1.current);
        setNav2(slider2.current);
        setNav3(slider3.current);
    }, []);

    const settings = {
        infinite: true,
        focusOnSelect: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        swipeToSlide: true,
        initialSlide: 2
    };

    const settings2 = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false
    };

    return (
        <div className='teamContainer'>
            <img className="quotesInTeamBox" src="gallery/logos/inTeamBox/download.svg" alt="" />

            <div className="aboutTeamContainer">

                <Slider
                    asNavFor={nav2} ref={slider3}

                    dots={false}
                    fade={true}
                    speed={500}
                    draggable={false}

                >

                    {team && team.map((pera, index) => { return <p key={index} className="aboutTeam">{pera.about}</p> })}
                </Slider>
            </div>

            <div className="TeamSliderContainer">

                <Slider
                    asNavFor={nav1} ref={slider2}

                    dots={false}
                    infinite={true}
                    focusOnSelect={true}
                    centerMode={true}
                    slidesToShow={3}
                    slidesToScroll={1}
                    speed={500}
                    swipeToSlide={true}
                    arrows={false}

                >
                    {team && team.map((team, index) => { return <img className='SliderImgs' key={index}  src={'gallery/images/team/' + team.img} alt="img" /> })}

                </Slider>

            </div>


            <div className="namePostContainer">

                <Slider
                    asNavFor={nav3} ref={slider1}

                    dots={false}
                    fade={true}
                    speed={500}
                    draggable={false}

                >

                    {team && team.map((team, index) => {
                        return <div key={index} className='namePost'>


                            <h5>{team && team.name}</h5>
                            <span>{team && team.post}</span>
                        </div>
                    })}
                </Slider>
            </div>
        </div >
    )
}

export default Team
