import React from 'react'

const Order = ({ order }) => {
  return (
    <div className='order'>
      {console.log(order)}
      <h3>{order.data.amount}</h3>
      {order.data.basket?.map((item, index) => (
        <div key={index} className='order__description'>
          <h4>{item.title}</h4>
        </div>
      ))}
    </div>
  )
}

export default Order
