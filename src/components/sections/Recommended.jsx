import React from 'react'
import { Link } from 'react-router-dom';

function Recommended({products}) {

    if(!products.length){
        return null
    }

  return (
   <section className='recommended'>
    <div className="container">
        <div className="recommended-head">
            <h3 className='recommended-head__title'>Recommended items</h3>
        </div>
        <div className="recommended-row">
            {
                products.map(item => (
                <Link to={`/product/${item.slug}`}>
                    <div className="recommended-box" key={item.id}>
                        <div className="recommended-img">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="recommended-titles">
                            <h3 className="recommended-title">{item.price}</h3>
                            <p className='recommended-subtitle'>{item.name_uz}</p>
                        </div>
                    </div>
                </Link>
                ))
            }
            
        </div>
    </div>
   </section>
  )
}

export default Recommended;
