import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div>
        <h3>Page not found</h3>
        <Link to='/'>Back to home</Link>
    </div>
  )
}

export default NotFoundPage