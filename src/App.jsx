import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Programs from './components/programs/Programs'  
import Title from './Title/Title'

const App = () => {
  return (
<>
<Navbar/>
<Hero/>
<div className='navbar'>
  <Title subtitle="Our Programs" title="What we Offer"/>
<Programs/>



</div>
</>
  )
}

export default App