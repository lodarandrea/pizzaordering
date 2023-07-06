import CartItemComponent from './CartItemComponent'
import { useAppSelector } from '../store/Hooks'

function Cart() {
  const cart = useAppSelector((state) => state.cart)
  return (
    <div className="flex flex-col">
      <div>
        <h1>Cart</h1>
      </div>
      <div>
        {cart?.map((item) => (
          <CartItemComponent item={item} />
        ))}
      </div>
    </div>
  )
}

export default Cart
