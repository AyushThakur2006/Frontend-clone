import React from 'react'
import program1 from  '../../assets/program-1.png';
import program2 from  '../../assets/program-2.png';
import program3 from  '../../assets/program-3.png';
import './Programs.css'
const Programs = () => {
  return (
    <div className='programs'>
    <div className='program'>
        <img src={program1} alt="" />
    </div>

    <div className='program'>
        <img src={program2} alt="" />
    </div>

    <div className='program'>
        <img src={program3} alt="" />
    </div>

    </div>
  )
}

export default Programs
