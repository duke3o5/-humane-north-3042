import React from 'react';
import '../style.scss'
import discount_tag from '../Images/flat-off.png'

export const ProductCard = () => {
  return (
    <div className='single-card'>
      <div className='flat-off'>
        <p>Get 26% Off</p>
        <img src={discount_tag} alt="" />
      </div>
      
    </div>
  )
}
