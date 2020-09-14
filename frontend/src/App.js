import React, { useEffect } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Checkout from './components/Checkout'
import Login from './components/Login'
import { useStateValue } from './state/StateProvider'
import { auth } from './config/firebase'
import Payment from './components/Payment'
import Orders from './components/Orders'

const promise = loadStripe(
  'pk_test_51HRK05DAXZFfmWTGuF8dsj20JMIrGkF8LYrFT1ssJwV1uqfdgoSGUrRo4xMN2k3PoaKWSyX4XvQVsOpnQErIdqPE003Rs3kn4P'
)

function App() {
  const [{ user }, dispatch] = useStateValue()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log('user: ', authUser)
      if (authUser) dispatch({ type: 'SET_USER', user: authUser })
      else {
        dispatch({ type: 'SET_USER', user: null })
      }
    })
    return () => {
      unsubscribe()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/orders'>
            <Navbar />
            <Orders />
          </Route>
          <Route path='/checkout'>
            <Navbar />
            <Checkout />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/payment'>
            <Navbar />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path='/'>
            <Navbar />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
