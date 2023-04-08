import React from 'react'
import { Link } from 'react-router-dom'
import "./Card.css"
const Card = ({item}) => {
  
  return (
    <div className='card' >
      <Link to={`/product/${item._id}`}>
    
      <div className="card_image">
        <img src={item.image} alt="" className='mainImage' />
    
      </div>
      <div className="card_info">

      <div className="card_title_price">
        <h4 className='card_title'>{item.title}</h4>
        <h4 className='card_price'>$ {item.price}</h4>
      </div>
      </div>
      </Link>
     <button className="product_button">Add to cart</button>
    </div>
  )
}

export default Card