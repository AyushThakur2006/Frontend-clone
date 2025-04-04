import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Programs from './components/programs/Programs'  
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonial from './components/Testimonial/Testimonial'

const App = () => {
  return (
<>
<Navbar/>
<Hero/>
<div className='navbar'>
  <Title subtitle="Our Programs" title="What we Offer"/>
<Programs/>
<About/>
<Title subtitle="Gallary" title="Campus Photos"/>
<Campus/>
<Title subtitle="Testimonial" title="What Student Say"/>
<Testimonial/>
</div>
</>
  )
}

export default App