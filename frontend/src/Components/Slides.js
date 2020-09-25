import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'

import '../Styles/Slides.css';
const Slides=() => {
    return (
        <div className="Slides">
            <Carousel slide="true">
                <Carousel.Item>
                    <div className="images">
                        <Image className="image" src="/images/QCH.jpg" fluid />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div class="images">
                        <Image className="image" src="/images/QCH_8.jpg" fluid /> 
                   </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div class="images">
                        <Image className="image" src="/images/QCH_7.jpg" fluid /> 
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="images">
                        <Image className="image" src="/images/QCH_5.jpg" fluid />
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slides;