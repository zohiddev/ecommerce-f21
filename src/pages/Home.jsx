import React from 'react'
import { AdSection, Banner, Recommended } from '../components'

function Home() {
  return (
    <div className='home-page'>
      <Banner />
      <AdSection />
      <Recommended />
    </div>
  )
}

export default Home