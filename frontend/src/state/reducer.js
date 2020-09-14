export const initialState = {
  basket: [
    // {
    //   id: '68',
    //   title: 'Eric Clapton The Autobiography',
    //   image:
    //     'https://images-na.ssl-images-amazon.com/images/I/51YZ20s6mdL._SX365_BO1,204,203,200_.jpg',
    //   price: 21.64,
    //   rating: 5,
    // },
  ],
  user: null,
}

export const getBasketTotal = (basket) =>
  basket?.reduce((total, itemBasket) => total + itemBasket.price, 0)

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.user }
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.payload],
      }
    case 'REMOVE_FROM_BASKET':
      let newBasket = [...state.basket]
      const index = state.basket.findIndex(
        (item) => item.id === action.payload.id
      )

      if (index >= 0) newBasket.splice(index, 1)

      return {
        ...state,
        basket: newBasket,
      }
    default:
      return state
  }
}

export default reducer
