import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <div className='nav'>
        <h3>sheriyans</h3>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/Product">Product</Link>
      </div>
      </div>
  )
}

export default navbar
