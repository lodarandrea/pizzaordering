import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MenuItem } from '../components/model/MenuCard'

export interface AddToCartPayload {
  card: MenuItem
}

export interface CartItems {
  card: MenuItem
  quantity: number
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [] as CartItems[],
  },
  reducers: {
    addToCart: (state, action: PayloadAction<AddToCartPayload>) => {
      const itemInCart = state.cart.find(
        (item) => item.card.id === action.payload.card.id
      )
      if (itemInCart) {
        itemInCart.quantity++
      } else {
        state.cart.push({ card: action.payload.card, quantity: 1 })
      }
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cart.find((item) => item.card.id === action.payload)
      item && item.quantity++
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cart.find((item) => item.card.id === action.payload)
      item && item.quantity--
    },
    removeFromCart: (state, action) => {
      const remove = state.cart.filter(
        (item) => item.card.id !== action.payload
      )
      state.cart = remove
    },
  },
})

export const cartReducer = cartSlice.reducer

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} = cartSlice.actions
