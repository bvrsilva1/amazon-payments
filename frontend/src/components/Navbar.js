import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import './Navbar.css'
import { useStateValue } from '../state/StateProvider'
import { auth } from '../config/firebase'

const Navbar = () => {
  //      state,          dispatch
  const [{ basket, user }, dispatch] = useStateValue() //destruct and get the basket right away

  const login = () => {
    if (user) auth.signOut()
  }

  return (
    <nav className='header'>
      {/*Link doesnt refresh the page*/}
      <Link to='/'>
        <img
          className='header__logo'
          src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
          alt='Amazon'
        />
      </Link>
      <div className='header__search'>
        <input type='text' className='header__searchInput' />
        <SearchIcon className='header__searchIcon' />
      </div>

      <div className='header__links'>
        <Link
          to={(!user && '/login') || (user && '/')}
          className='header__link'
        >
          <div onClick={login} className='header__option'>
            <span className='header__optionTop'>
              {user ? `Hello ${user?.email}` : 'Hi!'}
            </span>
            <span className='header__optionBottom'>
              {user ? 'Sign Out' : 'Sign In'}
            </span>
          </div>
        </Link>

        <Link to='/orders' className='header__link'>
          <div className='header__option'>
            <span className='header__optionTop'>Returns</span>
            <span className='header__optionBottom'>& Orders</span>
          </div>
        </Link>

        <Link to='/' className='header__link'>
          <div className='header__option'>
            <span className='header__optionTop'>Your</span>
            <span className='header__optionBottom'>Prime</span>
          </div>
        </Link>

        <Link to='/checkout' className='header__link'>
          <div className='header__optionBasket'>
            <ShoppingBasketIcon />
            <span className='header__optionBottom header__basketCount'>
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
