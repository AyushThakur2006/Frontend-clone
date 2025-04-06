import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import './Navbar.css'
import logo from '../../assets/logo.png'
const Navbar = () => {

const [sticky, setsticky] = useState(false);
useEffect(() => {
window.addEventListener("scroll",()=>{window.scrollY > window.innerHeight*.8 ? setsticky(true) : setsticky(false);
})
},[]);





  return (
<nav className={`navbar ${sticky? 'dark-nav':''}`}>
    <img src={logo} className="logo"/>

    <ul>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-110} duration={500}>About us</Link></li>
        <li><Link to='campus' smooth={true} offset={-300} duration={500}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-300} duration={500}>Testimonial</Link></li>
        <li><button className='btn'><Link to='contact' smooth={true} offset={0} duration={500}>Contact us</Link></button></li>
    </ul>
</nav>
  )
}

export default Navbar