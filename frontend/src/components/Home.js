import React from 'react'
import Product from './Product'
import './Home.css'
import { products } from '../data/products'

const Home = () => {
  return (
    <div className='home'>
      <img
        className='home__image'
        src='https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ZjFjMDMxZmIt/ZjFjMDMxZmIt-OGVmOTM1ZDYt-w3000._CB431004447_.jpg'
        alt='banner'
      />

      <div className='home__row'>
        {products.slice(0, 2).map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </div>

      <div className='home__row'>
        {products.slice(2, 5).map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </div>

      <div className='home__row'>
        {products.slice(5, 6).map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
