import React from 'react'
import MCV from '../../assets/MCV.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={MCV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA