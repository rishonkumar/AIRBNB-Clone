import React from 'react'
import logo3 from '../images/star.png'
import logo4 from '../images/k.png'

const Card = () => {
  return (
    <div className='card'>
        <img src={logo4} className='card--image' />
        <div className='card--stats'> 
            <img src={logo3} className="card--star"/>
            <span>5.0</span>
            <span className='gray'>(6) . </span>
            <span className='gray'>USA</span>
        </div>
        <p>Life Lessons with Katie Zaferes</p>
        <p><span className='bold'>From $136 </span> / person</p>
    </div>
  )
}

export default Card