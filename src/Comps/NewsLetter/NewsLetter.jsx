import React from 'react'
import './NewsLetter.css'


const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offer On Your e-mail</h1>
      <p>Subscribe and Get Latest News on Exclusive Offers</p>
      <div>
        <input type='email' placeholder='type your email id'/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
