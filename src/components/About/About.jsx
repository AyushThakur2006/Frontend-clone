import React from 'react'
import './About.css'
import image from '../../assets/about.png' 
import playicon from '../../assets/play-icon.png' 
const About = () => {
  return (
    <div className='about'>
<div className="about-left">
<img src={image} className='about-image'/>
<img src={playicon} className='playicon'/>
</div>

<div className="about-right">
<h3>About University</h3>
<h2>Nurturing Tommorow's Leaders Today</h2>
<p> 
    Embark on a transformative Educational journey with our university's 
    comperhensive education program. Our cutting-edge curriculum is
     designed to empower students  with the knowledge ,skills and 
     experiences needed to excel in thedynamic field of education.
</p>
<p>
    with a focus on innovation, hands-on learning, and personalized 
    mentorship, our programs prepare aspiring educators to make a meaningful 
    impact in the classrooms, schools and communities.
</p>
<p>
    Whether you aspire to become a teacher, administrator, counselor or
    education leader, our diverse range of programs offers the perfect
    pathway to achieve your goals and unlock your full potential in
    shaping the future of education.
</p>
</div>

    </div>
  )
}

export default About