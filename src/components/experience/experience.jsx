import React from 'react'
import './experience.css'   
import {BsPatchCheckFill} from 'react-icons/bs'
const experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__dataanalysis">
          <h3>Data Analysis</h3>
          <div className="experience__container">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Excel</h4>
              <small className='text-light'>Experienced</small>
              </div>
              </article>
              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>SQL</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              </article>
              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Power BI</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              </article>
              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Python</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              </article>
              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              </article>
          </div>
        </div>
        {/* END OF DATA*/}

          <div className="experience__DGMKTG">
          <h3>Digital Marketing</h3>
          <div className="experience__container">
              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Automation</h4>
                <small className='text-light'>Intermediate</small>
              </div>
              </article>
              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Social Media</h4>
                <small className='text-light'>Intermediate</small>
              </div>
              </article>
              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>SEO/SEM</h4>
                <small className='text-light'>Intermediate</small>
              </div>
              </article>
              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Video Editing</h4>
                <small className='text-light'>Intermediate</small>
              </div>
              </article>
          </div>
            </div>
            </div>
      </section>
  )
}

export default experience