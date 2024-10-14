import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

//Owl Carousel Settings
const options = {
    loop: true,
    center: true,
    items: 1,
    margin: 0,
    autoplay: true,
    dots: false,
    autoplayTimeout: 5000,
    smartSpeed: 450,
    nav: false,
};
function Slider() {
    return (
        <div className='container'>
            
            <OwlCarousel className='owl-theme' {...options} >
                <div className='item'>
                    <img src={require('../../images/image1.jpg')} alt="no img" />
                </div>
                <div className='item'>
                    <img src={require('../../images/image2.jpg')} alt="no img" />
                </div>
                <div className='item'>
                    <img src={require('../../images/image3.jpg')} alt="no img" />
                </div>
            </OwlCarousel>
        </div>
    )
}

export default Slider