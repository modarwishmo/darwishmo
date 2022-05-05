import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'


const Portfolio = () => {
  return (

    <section id='portfolio'>











      
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>This is Portfolio Item Title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn'>Github</a>
          <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        
      </div>
    </section>
  )
}

export default Portfolio