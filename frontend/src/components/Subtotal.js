import React from 'react'
import CurrencyFormat from 'react-currency-format'
import './Subtotal.css'
import { useStateValue } from '../state/StateProvider'
import { useHistory } from 'react-router-dom'
import { getBasketTotal } from '../state/reducer'

const Subtotal = () => {
  const history = useHistory()
  const [{ basket, user }, dispatch] = useStateValue()

  const handleHistory = () => {
    if (user) history.push('/payment')
    else history.push('/login')
  }

  return (
    <div className='subtotal'>
      <CurrencyFormat
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
            </p>
            <small className='subtotalGift'>
              <input type='checkbox' />
              This order constains a gift
            </small>
          </>
        )}
      />

      <button onClick={handleHistory}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
