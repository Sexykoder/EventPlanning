import React from 'react'

function Footer() {
  return (
    <footer>
    <div className='banner'>
      <div className='title'>
        <h1>BRIJ's</h1>
        <p>Events and Weddings</p>
      </div>
      <div className='tag'>
        <label>News Letters</label>
        <div>
          <input type='text' placeholder='E-mail'/>
          <button>Subscribe</button>
        </div>
        <p>Signup to recieve news updates</p>
      </div>
    </div>

    </footer>
  )
}

export default Footer
