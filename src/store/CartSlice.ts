import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MenuItem } from '../components/model/MenuItem'

export interface AddToCartPayload {
  item: MenuItem
}

export interface CartItem {
  card: MenuItem
  quantity: number
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [] as CartItem[],
  },
  reducers: {
    addToCart: (state, action: PayloadAction<AddToCartPayload>) => {
      const itemInCart = state.cart.find(
        (item) => item.card.id === action.payload.item.id
      )
      if (itemInCart) {
        itemInCart.quantity++
      } else {
        state.cart.push({ card: action.payload.item, quantity: 1 })
      }
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cart.find((item) => item.card.id === action.payload)
      item && item.quantity++
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cart.find((item) => item.card.id === action.payload)
      if (item) {
        if (item.quantity > 1) {
          item.quantity--
        } else {
          const remove = state.cart.filter(
            (item) => item.card.id !== action.payload
          )
          state.cart = remove
        }
      }
    },
    removeFromCart: (state, action) => {
      const remove = state.cart.filter(
        (item) => item.card.id !== action.payload
      )
      state.cart = remove
    },
    clearCart: (state) => {
      state.cart = []
    },
  },
})

export const cartReducer = cartSlice.reducer

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions
