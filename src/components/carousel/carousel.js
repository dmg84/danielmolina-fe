import React from 'react';
import Slider from "react-slick";
import Style from './carousel.module.scss';

const Carousel = (props) => {

    const settings = {
        swipeToSlide: true,
        arrows: false,
        dots: false,
        lazyLoad: true,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className={Style.container}>
            <Slider {...settings} >
                {props.slides.map((el, key) => {
                    return (
                        <div className={Style.element} key={`${key}-container`}>
                            <img key={`${key}-img`} src={el.img} alt={el.title}/>
                            <h4 key={`${key}-h4`}>{el.title}</h4>
                            <span key={`${key}-span`}>{el.lead}</span>
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
};

export default Carousel;