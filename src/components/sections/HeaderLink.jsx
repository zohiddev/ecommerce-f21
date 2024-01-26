import React from 'react'
import { NavLink } from 'react-router-dom'

function HeaderLink() {
  return (
    <div className="link">
        <div className="container">
            <div className="link__col__header">
                <NavLink to='/' className='link__col__header-link'>Home</NavLink>
                <NavLink to='#' className='link__col__header-link'>Clothings</NavLink>
                <NavLink to='#' className='link__col__header-link'>Men’s wear</NavLink>
                <NavLink to='#' className='link__col__header-link'>Summer clothing</NavLink>
            </div>
        </div>
    </div>
  )
}

export default HeaderLink