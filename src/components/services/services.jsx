import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
           <h3>Data Analysis</h3>

          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Description of Data analysis service</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Description of Data analysis service</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Description of Data analysis service</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Description of Data analysis service</p>
            </li>

          </ul>
        </article>
        {/* END OF DATA ANALYSIS */}
        <article className="service">
          <div className="service__head">
           <h3>Digital Marketing</h3>

          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Description of Data analysis service</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Description of Data analysis service</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Description of Data analysis service</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Description of Data analysis service</p>
            </li>

          </ul>
        </article>
        {/* END OF DATA ANALYSIS */}
        <article className="service">
          <div className="service__head">
           <h3>Web Development</h3>

          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Description of Data analysis service</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Description of Data analysis service</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Description of Data analysis service</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Description of Data analysis service</p>
            </li>

          </ul>
        </article>
        {/* END OF DATA ANALYSIS */}
      </div>
    </section>
  )
}

export default Services