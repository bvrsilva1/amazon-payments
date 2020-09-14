import React from 'react'
import { useStateValue } from '../state/StateProvider'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
import './Checkout.css'

const Checkout = () => {
  const [{ basket, user }] = useStateValue()

  return (
    <div className='checkout'>
      <div className='checkoutLeft'>
        {basket?.length === 0 ? (
          <div>
            <h2 className='checkoutTitle'>
              {user ? `${user.email}, ` : 'Guest, '} your shopping basket is
              empty
            </h2>
            <p>
              You have no items in your basket. To buy a product, click on add
              to the basket
            </p>
          </div>
        ) : (
          <div>
            <h2 className='checkoutTitle'>
              {user ? `${user.email}, ` : 'Guest '} shopping Basket
            </h2>
            {basket?.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className='checkoutRight'>
          <Subtotal />
        </div>
      )}
    </div>
  )
}

export default Checkout
