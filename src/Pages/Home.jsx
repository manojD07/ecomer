import React from 'react'
import Hero from '../Comps/Hero/Hero'
import Popular from '../Comps/Popular/Popular'
import Offer from '../Comps/Offers/Offers'
import NewCollections from '../Comps/NewCollections/NewCollections'
import NewsLetter from '../Comps/NewsLetter/NewsLetter'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offer/>
        <NewCollections/>
        <NewsLetter/>
    </div>
  )
}

export default Home
