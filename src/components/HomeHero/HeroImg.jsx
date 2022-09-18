import React from 'react';
import heroImg from '../../assets/hero-img.webp';

const HeroImg = () => {
    return (
        <>
            <div className="hero_img">
                <div className="image_wrapper">
                    <img className="hero_img--image" src={heroImg} alt="tenyain with a plane" loading="lazy" />
                    <span className="squares square_1"></span>
                    <span className="squares square_2"></span>
                </div>
            </div>
        </>
    );
}

export default HeroImg;
