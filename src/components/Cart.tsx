import CartItemComponent from './CartItemComponent'
import { useAppSelector } from '../store/Hooks'
import ClearCartButton from './buttons/ClearCartButton'

function Cart() {
  const cart = useAppSelector((state) => state.cart)
  return (
    <div className="flex flex-col bg-neutral-300 p-2 rounded-xl">
      <div className="w-full flex justify-between items-baseline">
        <h1 className="text-2xl font-medium">Cart</h1>
        <ClearCartButton />
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
