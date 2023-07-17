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

export type Location = 'menu' | 'checkout'

export interface CardItemPops {
  item: CartItem
  displayImg: boolean
  enableDelete: boolean
  location: Location
}

interface CartItemStyle {
  mainContainer: string
  infoContainer: string
  priceContainer: string
  quantityContainer: string
  description: string
  price: string
}

const styles: { [location in Location]: CartItemStyle } = {
  menu: {
    mainContainer:
      'flex flex-col justify-between h-full border-b-2 border-neutral-800 py-2',
    infoContainer: '',
    priceContainer: 'flex justify-between',
    quantityContainer: 'flex items-center justify-between order-last',
    description: '',
    price: 'font-medium px-4 py-2 order-first',
  },
  checkout: {
    mainContainer: 'flex my-3 w-full',
    infoContainer: 'flex justify-start items-center basis-2/3',
    priceContainer: 'flex basis-1/3 justify-end items-center w-full',
    quantityContainer:
      'flex items-center justify-evenly mx-3 w-1/3 order-first',
    description: 'flex flex-col px-2',
    price: 'font-medium order-last mx-3 justify-end',
  },
}

function CartItemComponent({
  item,
  displayImg,
  enableDelete,
  location,
}: CardItemPops) {
  const dispatch = useAppDispatch()
  const { id, imageUrl, name, ingred, price } = item.card

  return (
    <div className={styles[location].mainContainer}>
      <div className={styles[location].infoContainer}>
        {displayImg ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-24 h-full object-cover rounded-md object-center"
          />
        ) : null}
        <div className={styles[location].description}>
          <h2 className="font-medium text-xl">{name}</h2>
          <h3 className="text-sm">{ingred}</h3>
        </div>
      </div>
      <div className={styles[location].priceContainer}>
        <h3 className={styles[location].price}>
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
        <div className={styles[location].quantityContainer}>
          <button
            onClick={() => dispatch(incrementQuantity(id))}
            className="cartButton"
          >
            <AddRoundedIcon fontSize="small" />
          </button>
          <h2>{item.quantity} qty</h2>
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
