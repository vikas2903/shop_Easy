import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

const images = [
    {
        "image":"https://stylum.in/cdn/shop/files/Hero_Banner_Web_1920x.jpg",
        "alt": "BANNER 01"
    },
    {
        "image": "https://stylum.in/cdn/shop/files/Web_1920x.jpg",
        "alt": "BANNER 02"
    },
    {
        "image": "https://stylum.in/cdn/shop/files/Web_1_1920x.jpg",
        "alt": "BANNER 03"
    },
    {
        "image": "https://stylum.in/cdn/shop/files/Web_2_1920x.jpg",
        "alt": "BANNER 04"
    }
];

export default function Slideshow() {
    var settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        speed: 500,
        slidesToShow: 1,
        arrows:true,
        slidesToScroll: 1,
    };

    return (
        <Wrapper>
        <Slider {...settings}>
            {images.map((image) => (
                // <div className="slider-wrapper" key={image.alt}>
                    <img src={image.image} alt={image.alt} />
                // </div>
            ))}
        </Slider>
        </Wrapper>
    );
}

const Wrapper = styled.section`
.slick-dots li button {
    // width: 14px;
    height: 7px;
    border-radius: 4px;
    background: #7a72ff96;
    border: none;
    padding: 0;
}
.slick-dots li.slick-active {
    width: 28px;
}
.slick-dots li.slick-active button {
    width: 28px;
    background: #7A72FF;
}
.slick-dots{
    bottom:0;
}
.slick-dots li button:before{visibility :hidden;}
`