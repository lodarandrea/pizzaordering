import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  CartItem,
} from '../store/CartSlice'
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded'
import { useAppDispatch } from '../store/Hooks'

export interface CardItemPops {
  item: CartItem
}

function CartItemComponent({ item }: CardItemPops) {
  const dispatch = useAppDispatch()
  const { id, name, ing, price } = item.card
  return (
    <div className="flex flex-col justify-between h-full border-b-2 border-neutral-800 py-2">
      <div>
        <h2 className="text-lg font-medium">{name}</h2>
      </div>
      <div>
        <h3 className="text-sm">{ing}</h3>
      </div>
      <div>
        <div className="flex justify-between">
          <h3 className="font-medium px-4 py-2">
            Price: {price * item.quantity} Ft
          </h3>
          <div className="flex justify-center items-center">
            <button
              onClick={() => dispatch(incrementQuantity(id))}
              className="cartButton"
            >
              <AddRoundedIcon fontSize="small" />
            </button>
            <h3 className="">{item.quantity} qty</h3>
            <button
              onClick={() => dispatch(decrementQuantity(id))}
              className="cartButton"
            >
              <RemoveRoundedIcon fontSize="small" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItemComponent
