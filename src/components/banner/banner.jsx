import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import React, { Component } from 'react';
import Slider from 'react-slick';
import photos from './imagenes';



class Banner extends Component {
    render () {
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 4,
            arrows: true,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            className: 'slides'
        };
        return (
            <div className="App">
                <Slider {...settings}>
                    {photos.map((photo, index) => {
                        return (
                            <div  key={index}>
                                <img width="100%" height="500px" alt='' src={photo.url}>
                                </img>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        );
    }
}
export default Banner;
