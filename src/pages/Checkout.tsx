import { useAppSelector } from '../store/Hooks'
import CartItemComponent from '../components/CartItemComponent'
import CheckoutButton from '../components/buttons/CheckoutButton'

function Checkout() {
  const cart = useAppSelector((state) => state.cart)
  const totalPrice = cart?.reduce(
    (previousTotal, item) => previousTotal + item.quantity * item.card.price,
    0
  )
  const delivery: number = 900
  return (
    <>
      <div>Checkout</div>
      <div>
        {cart.map((item) => (
          <CartItemComponent item={item} />
        ))}
      </div>
      <div>
        <p>Total Price: {totalPrice} Ft</p>
        <p>Delivery cost: {delivery} Ft</p>
        <p>Total Payment: {totalPrice + delivery} Ft</p>
      </div>
      <CheckoutButton />
    </>
  )
}

export default Checkout
