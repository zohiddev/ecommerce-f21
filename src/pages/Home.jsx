import React, { useEffect, useState } from 'react'
import { AdSection, Banner, Recommended,  } from '../components'

function Home() {

  const [recommendedProducts, setRecommendedProducts] = useState([])

  function fetchRecommendedProducts (){
    fetch('https://ecommerce.main-gate.appx.uz/dev/v1/product/list?type=recommended').then(function(response){
      return response.json()
    }).then(function(json){
      setRecommendedProducts(json.products)
    })
  }

  useEffect(function(){
    fetchRecommendedProducts()
  }, [])

  console.log(recommendedProducts)

  return (
    <div className='home-page'>
      <Banner />
      {/* <AdSection /> */}
      <Recommended products={recommendedProducts}/>
    </div>
  )
}

export default Home