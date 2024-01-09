import React from 'react'
import { AdSection, Banner, Recommended, TimeSection,SendRequestSection,Categories } from '../components'

function Home() {
  return (
    <div className='home-page'>
      <Banner />
      <TimeSection/>
      <AdSection /> 
       <SendRequestSection/>
      <Recommended />
      <Categories/>
    </div>
  )
}

export default Home