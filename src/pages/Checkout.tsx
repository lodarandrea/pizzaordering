import { useAppDispatch, useAppSelector } from '../store/Hooks'
// import CartItemComponent from '../components/CartItemComponent'
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
          <div key={item.card.id} className="flex my-3 w-full">
            <div className="flex justify-start items-center basis-2/3">
              <img
                src={item.card.imageUrl}
                alt={item.card.name}
                className="w-24 h-full object-cover rounded-md object-center"
              />
              <div className="flex flex-col px-2">
                <h1 className="text-xl font-medium ">{item.card.name}</h1>
                <h2 className="text-lg  ">{item.card.ing}</h2>
              </div>
            </div>
            <div className="flex basis-1/3 justify-end items-center w-full">
              <div className="flex items-center justify-evenly mx-3 w-1/3">
                <button
                  onClick={() => dispatch(incrementQuantity(item.card.id))}
                >
                  <AddRoundedIcon fontSize="small" />
                </button>
                <h3>{item.quantity} qty</h3>
                <button
                  onClick={() => dispatch(decrementQuantity(item.card.id))}
                >
                  <RemoveRoundedIcon fontSize="small" />
                </button>
              </div>
              <button
                onClick={() => dispatch(removeFromCart(item.card.id))}
                className="mx-3"
              >
                <DeleteRoundedIcon />
              </button>
              <h3 className="text-lg font-medium mx-3 justify-end">
                {item.card.price} Ft
              </h3>
            </div>
          </div>
          //   <CartItemComponent item={item} key={item.card.id} />
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
