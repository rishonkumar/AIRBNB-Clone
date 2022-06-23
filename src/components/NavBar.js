import React from 'react'
import logo from '../images/airbnb.png'

const NavBar = () => {
  return (
    <nav>
        <img src={logo} alt='image'  className='nav--logo'/>
    </nav>
  )
}

export default NavBar;