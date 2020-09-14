import React from 'react'
import StarIcon from '@material-ui/icons/Star'
import './Product.css'
import { useStateValue } from '../state/StateProvider'

const Product = ({ id, title, image, price, rating }) => {
  const [{}, dispatch] = useStateValue() //destruct and get the basket right away

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      payload: {
        id,
        title,
        image,
        price,
        rating,
      },
    })
  }

  return (
    <div className='product'>
      <div className='productInfo'>
        <p>{title}</p>
        <p className='productPrice'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='productRating'>
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>
                <StarIcon className='ratingStar' />
              </p>
            ))}
        </div>
      </div>

      <img className='productImage' src={image} alt='product_image' />
      <button onClick={addToBasket} className='productButton'>
        Add to basket
      </button>
    </div>
  )
}

export default Product
