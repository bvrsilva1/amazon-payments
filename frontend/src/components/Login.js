import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../firebase/firebase'

const Login = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = (event) => {
    event.preventDefault() //get the event because I dont want the page to refresh
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => history.push('/'))
      .catch((error) => alert(error.message))
  }

  const register = (event) => {
    event.preventDefault()
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => history.push('/'))
      .catch((error) => alert(error.message))
  }

  return (
    <div className='login'>
      <Link to='/'>
        <img
          className='login__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
          alt=''
        />
      </Link>
      <div className='login__container'>
        <h1>Sign-in</h1>
        <form>
          <h5>Email</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type='email'
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type='password'
          />
          <button onClick={login} className='signin__button'>
            Sign In
          </button>
        </form>
        <button onClick={register} className='create__accountButton'>
          Create your Amazon account
        </button>
      </div>
    </div>
  )
}

export default Login
