import React from 'react'
import logo3 from '../images/star.png'
// import logo4 from '../images/k.png'

const Card = (props) => {
  // console.log(props)
  return (
    <div className='card'>
        <img src={props.img} className='card--image' />
        <div className='card--stats'> 
            <img src={logo3} className="card--star"/>
            <span>{props.rating}</span>
            <span className='gray'>({props.reviewCount}) . </span>
            <span className='gray'>{props.country}</span>
        </div>
        <p>{props.title}</p>
        <p><span className='bold'>From ${props.price} </span> / person</p>
    </div>
  )
}

export default Card