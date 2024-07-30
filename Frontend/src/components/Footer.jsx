import React from 'react'

function Footer() {
  return (
    <footer>
    <div className='banner'>
      <div className='title'>
        <h1>CHANDAN's</h1>
        <p>From Jail To Bail</p>
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
