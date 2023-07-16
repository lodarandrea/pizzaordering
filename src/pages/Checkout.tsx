import { useAppDispatch, useAppSelector } from '../store/Hooks'
import CartItemComponent from '../components/CartItemComponent'
import CheckoutButton from '../components/buttons/CheckoutButton'
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded'
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from '../store/CartSlice'

function Checkout() {
  const cart = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()

  const totalPrice = cart?.reduce(
    (previousTotal, item) => previousTotal + item.quantity * item.card.price,
    0
  )
  const delivery: number = 900

  const cost = [
    { name: 'Total Price', term: totalPrice },
    { name: 'Delivery Cost', term: delivery },
    { name: 'Total Payment', term: totalPrice + delivery },
  ]
  return (
    <div className="mt-10">
      <h1 className=" pl-5 text-4xl font-semibold border-b-4 border-neutral-800">
        Checkout
      </h1>
      <div className="my-10 px-5">
        {cart.map((item) => (
          <CartItemComponent
            item={item}
            key={item.card.id}
            displayImg={true}
            enableDelete={true}
            location="checkout"
          />
        ))}
      </div>
      <div className="flex flex-col pl-16 text-lg font-medium">
        {cost.map((costItem) => (
          <p key={costItem.name}>
            {costItem.name}: {costItem.term} Ft
          </p>
        ))}
      </div>
      <CheckoutButton />
    </div>
  )
}

export default Checkout
