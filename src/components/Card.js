import React from 'react'
import logo3 from '../images/star.png'
// import logo4 from '../images/k.png'

const Card = (props) => {
  // console.log(props)
  // console.log(props.openSpots)
  let badgeText
  if (props.openSpots === 0) {
      badgeText = "SOLD OUT"
  } else if (props.location === "Online") {
      badgeText = "ONLINE"
  }
  return (
    <div className='card'>
        {/* {props.openSpots == 0 && <div className='card--badge'>SOLD OUT</div>} */}
        {badgeText && <div className='card--badge'>{badgeText}</div>}
        <img src={props.img} className='card--image' />
        <div className='card--stats'> 
            <img src={logo3} className="card--star"/>
            <span>{props.item.stats.rating}</span>
            <span className='gray'>({props.item.stats.reviewCount}) . </span>
            <span className='gray'>{props.item.location}</span>
        </div>
        <p className="card--title">{props.item.title}</p>
            <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p>
    </div>
  )
}

export default Card