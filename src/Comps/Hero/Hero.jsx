import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_img from '../Assets/hero_image.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-right">
                <img src={hero_img} alt='hero'/>
            </div>
            <div className="hero-left">
                <h2>New Arivals</h2>
                <div>
                    <div className="hand-hand-icon">
                        <p>new</p>
                        <img src={hand_icon} alt='hand' ></img>
                    </div>
                    <p>Collections</p>
                    <p>for Everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Collections</div>
                    <img src={arrow_icon} alt='arrow' ></img>
                </div>
            </div>
        </div>
    )
}

export default Hero
