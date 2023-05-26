import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AddToCartPayload {
  id: number
  name?: string
  imgSrc?: string
  price?: number
  quantity: number
}

export interface CartItems {
  id: number
  name?: string
  imgSrc?: string
  price?: number
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
        (item) => item.id === action.payload.id
      )
      if (itemInCart) {
        itemInCart.quantity++
      } else {
        state.cart.push({ ...action.payload, quantity: 1 })
      }
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cart.find((item) => item.id === action.payload)
      item && item.quantity++
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cart.find((item) => item.id === action.payload)
      item && item.quantity--
    },
    removeFromCart: (state, action) => {
      const remove = state.cart.filter((item) => item.id !== action.payload)
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
