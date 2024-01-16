import React, { useEffect, useState } from 'react'
import { AdSection, Banner, Recommended, SendRequestSection, TimeSection, Categories } from '../components'

function Home() {

  const [recommendedProducts, setRecommendedProducts] = useState([])

  function fetchRecommendedProducts() {
    fetch('https://ecommerce.main-gate.appx.uz/dev/v1/product/list?type=recommended').then(function (response) {
      return response.json()
    }).then(function (json) {
      setRecommendedProducts(json.products)
    })
  }

  useEffect(function () {
    fetchRecommendedProducts()
  }, [])

  console.log(recommendedProducts)

  return (
    <div className='home-page'>
      <Banner />
      <TimeSection />
      <AdSection />

      <SendRequestSection />
      <Recommended products={recommendedProducts} />
      <Categories />
    </div>
  )
}

export default Home