import React, { createContext, useContext, useReducer } from 'react'

//data layer
export const StateContext = createContext()

//provider wrap
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

//pull info from data layout
export const useStateValue = () => useContext(StateContext)
