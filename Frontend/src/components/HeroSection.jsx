import React from 'react'
import { Link } from 'react-scroll'

function HeroSection() {
  return (
    <section className='hero'>
      <img src="wedding.jpg" alt="bg" />
      <div className='item'>
        <h3>Dream Maker</h3>
        <div>
          <h1>Your Personal Dream Maker</h1>
          <p>WE believe it is about the big dreams and the small detials</p>
          <Link to="contact" spy={true} smooth={true} duration={500}>BOOK NOW</Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
