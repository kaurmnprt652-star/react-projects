import React from 'react'
import Nav2 from './Nav2'

const Navbar = (props) => {
  return (
    <div className='nav'>
        <h2>preet</h2>
        <Nav2 theme={props.theme} />
      <Nav2 />
    </div>
  )
}

export default Navbar
