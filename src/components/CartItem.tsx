import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../components/store/CartSlice'
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded'
import { useAppDispatch } from './store/Hooks'

export interface CardItemPops {
  id: number
  imgSrc?: string
  pizzaName?: string
  price?: number
  quantity?: number
}

function CartItem({
  id,
  imgSrc,
  pizzaName,
  price,
  quantity = 0,
}: CardItemPops) {
  const dispatch = useAppDispatch()
  return (
    <div className="flex  bg-indigo-100 mx-3 justify-between">
      <div>
        <div className="overflow-hidden">
          <img
            src={imgSrc}
            alt={pizzaName}
            className="w-16 object-cover rounded-full object-center  transition hover:scale-110"
          />
        </div>
        <h2 className="text-xl font-medium p-4">{pizzaName}</h2>
      </div>
      <div>
        <div className="flex py-5">
          <div>
            <button onClick={() => dispatch(incrementQuantity(id))}>
              <AddRoundedIcon fontSize="small" />
            </button>
            <h3>{quantity} qty</h3>
            <button onClick={() => dispatch(decrementQuantity(id))}>
              <RemoveRoundedIcon fontSize="small" />
            </button>
          </div>
          <button onClick={() => dispatch(removeFromCart(id))}>
            <DeleteRoundedIcon />
          </button>
          <h3 className="text-lg font-medium px-4 py-2">{price} Ft</h3>
        </div>
      </div>
    </div>
  )
}

export default CartItem
