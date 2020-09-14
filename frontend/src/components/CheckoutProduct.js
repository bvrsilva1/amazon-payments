import React from 'react'
import StarIcon from '@material-ui/icons/Star'
import './CheckoutProduct.css'
import { useStateValue } from '../state/StateProvider'

const CheckoutProduct = ({ id, title, image, price, rating }) => {
  const [{}, dispatch] = useStateValue()

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      payload: { id },
    })
  }

  return (
    <div className='checkoutProduct'>
      <img
        className='checkoutProductImage'
        src={image}
        alt='checkoutProductImage'
      />

      <div className='checkoutProductInfo'>
        <p className='checkoutProductTitle'>{title}</p>

        <p className='checkoutProductPrice'>
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className='productCheckoutRating'>
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>
                <StarIcon className='ratingStar' />
              </p>
            ))}
        </div>

        <button onClick={removeFromBasket} className='removeButton'>
          Remove from basket
        </button>
      </div>
    </div>
  )
}

export default CheckoutProduct
