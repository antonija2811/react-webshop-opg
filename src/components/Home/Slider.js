import React from 'react';
import {Slide} from 'react-slideshow-image';
import image1 from '../../assets/povrce.jpeg';
import image2 from '../../assets/voce.jpg';
import './Slider.css';
import 'react-slideshow-image/dist/styles.css'

const images = [image1,image2];

const properties = {
    duration: 4000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    pauseOnHover: true,
    arrows: true,
};


const Slideshow = () => {
    return (
        <div className="slide-container">
            <Slide {...properties}>
                {images.map((each,index)=> (
                    <img key={index} className="slide_images" src={each} alt={index}/>
                ))}
            </Slide>
        </div>
    );
};



export default Slideshow;