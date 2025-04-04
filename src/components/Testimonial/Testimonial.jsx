import React, { useRef, useState } from 'react'
import './Testimonial.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'
const Testimonial = () => {
    const slider=useRef()
    let tx=0;
const slideforward=()=>{
if(tx>-50)
{
    tx-=25;
 slider.current.style.transform=`translateX(${tx}%)`;
}
}

const slidebackward=()=>{
    if(tx<0)
        {
            tx+=25;
            slider.current.style.transform=`translateX(${tx}%)`;
        }
}

  return (
    <div className='testimonials'>
        <img src={next_icon} alt=""  className='next-btn' onClick={slideforward}/>  
        <img src={back_icon} alt=""  className='back-btn' onClick={slidebackward}/>  
        <div className="slider">
<ul ref={slider}>
<li>
<div className="slide">
    <div className="user-info">
        <img src={user1}/>
        <div>
            <h2>Sophia Martinez</h2>
            <span>Edusity, USA</span>
        </div>
    </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repudiandae nulla, veritatis natus aliquam quibusdam obcaecati commodi? Rem, harum exercitationem reiciendis non sit porro! Tenetur!</p>
</div>
</li>



<li>
<div className="slide">
    <div className="user-info">
        <img src={user2}/>
        <div>
            <h2>John Doe</h2>
            <span>Edusity, USA</span>
        </div>
    </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repudiandae nulla, veritatis natus aliquam quibusdam obcaecati commodi? Rem, harum exercitationem reiciendis non sit porro! Tenetur!</p>
</div>
</li>




<li>
<div className="slide">
    <div className="user-info">
        <img src={user3}/>
        <div>
            <h2>Emily Davis</h2>
            <span>Edusity, UK</span>
        </div>
    </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repudiandae nulla, veritatis natus aliquam quibusdam obcaecati commodi? Rem, harum exercitationem reiciendis non sit porro! Tenetur!</p>
</div>
</li>




<li>
<div className="slide">
    <div className="user-info">
        <img src={user4}/>
        <div>
            <h2>Jane Smith</h2>
            <span>Edusity, Canada</span>
        </div>
    </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repudiandae nulla, veritatis natus aliquam quibusdam obcaecati commodi? Rem, harum exercitationem reiciendis non sit porro! Tenetur!</p>
</div>
</li>
</ul>
        </div>
    </div>
  )
}

export default Testimonial