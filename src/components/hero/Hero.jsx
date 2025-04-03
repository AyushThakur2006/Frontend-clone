import React from 'react'
import "./Hero.css"
import darkkarrow from '../../assets/dark-arrow.png' 
const Hero = () => {  
  return (
    <div className='hero navbar'>
        <div className="hero-text">
<h1>We Ensure a better education for a better world </h1>
<p>Our cutting-edge curriclum is designed to empower students with the 
    knowledge ,skills and experiences needed to excel in the dynamic field of education
      </p>
<button className='btn'>Explore More <img src={darkkarrow} className='arrow_icon' /></button>
        </div>
    </div>
  )
}

export default Hero