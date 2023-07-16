import {
  incrementQuantity,
  decrementQuantity,
  CartItem,
  removeFromCart,
} from '../store/CartSlice'
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded'
import { useAppDispatch } from '../store/Hooks'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded'

export interface CardItemPops {
  item: CartItem
  displayImg: boolean
  enableDelete: boolean
  location: 'menu' | 'checkout'
}

function CartItemComponent({
  item,
  displayImg,
  enableDelete,
  location,
}: CardItemPops) {
  const dispatch = useAppDispatch()
  const { id, imageUrl, name, ing, price } = item.card
  return (
    <div
      className={`flex ${
        location === 'menu'
          ? 'flex-col justify-between h-full border-b-2 border-neutral-800 py-2'
          : 'my-3 w-full'
      } `}
    >
      <div
        className={`${
          location === 'menu' ? '' : 'flex justify-start items-center basis-2/3'
        }`}
      >
        {displayImg ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-24 h-full object-cover rounded-md object-center"
          />
        ) : null}
        <div className={`${location === 'menu' ? '' : 'flex flex-col px-2'}`}>
          <h2
            className={`font-medium ${
              location === 'menu' ? 'text-lg' : 'text-xl'
            }`}
          >
            {name}
          </h2>
          <h3 className={`${location === 'menu' ? 'text-sm' : 'text-lg'}`}>
            {ing}
          </h3>
        </div>
      </div>

      <div
        className={`flex  ${
          location === 'menu'
            ? 'justify-between'
            : 'basis-1/3 justify-end items-center w-full'
        }`}
      >
        <h3
          className={`font-medium ${
            location === 'menu'
              ? 'px-4 py-2 order-first'
              : 'order-last text-lg mx-3 justify-end'
          } `}
        >
          Price: {price * item.quantity} Ft
        </h3>
        {enableDelete ? (
          <button
            onClick={() => dispatch(removeFromCart(item.card.id))}
            className="mx-3"
          >
            <DeleteRoundedIcon />
          </button>
        ) : null}
        <div
          className={`flex items-center ${
            location === 'menu'
              ? 'justify-between order-last'
              : 'justify-evenly mx-3 w-1/3 order-first'
          }`}
        >
          <button
            onClick={() => dispatch(incrementQuantity(id))}
            className="cartButton"
          >
            <AddRoundedIcon fontSize="small" />
          </button>
          <h3>{item.quantity} qty</h3>
          <button
            onClick={() => dispatch(decrementQuantity(id))}
            className="cartButton"
          >
            <RemoveRoundedIcon fontSize="small" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItemComponent
