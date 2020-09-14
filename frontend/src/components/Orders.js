import React, { useEffect, useState } from 'react'
import { db } from '../config/firebase'
import { useStateValue } from '../state/StateProvider'
import Order from './Order'
import './Orders.css'

const Orders = () => {
  const [{ basket, user }, dispatch] = useStateValue()
  const [orders, setOrders] = useState([])

  useEffect(() => {
    if (user) {
      db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        )
    } else {
      setOrders([])
    }
  }, [])

  return (
    <div className='orders'>
      <h1>Your orders</h1>
      <div className='orders__order'>
        {orders?.map((order, index) => (
          <Order key={index} order={order} />
        ))}
      </div>
    </div>
  )
}

export default Orders
