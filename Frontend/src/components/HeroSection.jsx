import React from 'react'
import { Link } from 'react-scroll'

function HeroSection() {
  return (
    <section className='hero'>
      <img src="supreme.jpg" alt="bg" />
      <div className='item'>
        <h3>Legal Expertise</h3>
        <div>
          <h1>Expert Legal Solutions</h1>
          <p>Trusted Legal Experts, Dedicated to Your Success</p>
          <Link to="contact" spy={true} smooth={true} duration={500}>BOOK NOW</Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
