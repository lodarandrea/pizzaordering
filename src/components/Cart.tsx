import CartItemComponent from './CartItemComponent'
import { useAppSelector } from '../store/Hooks'

function Cart() {
  const cart = useAppSelector((state) => state.cart)
  return (
    <div className="flex flex-col bg-neutral-300 p-2">
      <div className="w-full">
        <h1 className="text-2xl font-medium">Cart</h1>
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
