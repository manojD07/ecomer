import React from 'react'
import './Offers.css'
import offer_image from '../Assets/exclusive_image.png'

const Offers = () => {
   return (
      <div className='offers'>
			<div className="offers-left">
				<h1>Exclusive</h1>
				<h1>Offer For You</h1>
				<p>Only on best sellers</p>
				<button>Check Now</button>
			</div>
			<div className="offers-right">
				<img src={offer_image} alt='Offer'/>
			</div>
      </div>
   )
}

export default Offers
