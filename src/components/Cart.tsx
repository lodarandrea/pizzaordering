import CartItem from './CartItem'
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
          <CartItem
            key={item.id}
            id={item.id}
            pizzaName={item.name}
            imgSrc={item.imgSrc}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </div>
    </div>
  )
}

export default Cart
