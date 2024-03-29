import { addToCart } from '../store/CartSlice'
import { useAppDispatch } from '../store/Hooks'
import { MenuItem } from './model/MenuItem'

interface CardPops {
  item: MenuItem
}

function Card({ item }: CardPops) {
  const dispatch = useAppDispatch()
  const { name, imageUrl, ingred, price } = item
  return (
    <div className="flex flex-col rounded-xl bg-indigo-100 mx-3 h-full relative">
      <div className="overflow-hidden rounded-t-xl">
        <img
          src={imageUrl}
          alt={name}
          className="h-48  w-full object-cover object-center  transition hover:scale-110"
        />
      </div>
      <div className="mb-5">
        <h2 className="text-xl font-medium p-4">{name}</h2>
        <h3 className="text-lg py-2 px-4">{ingred}</h3>
      </div>
      <div className="flex py-5 justify-between mx-2 ">
        <h3 className="absolute bottom-2 text-lg font-medium px-4 py-2">
          {price} Ft
        </h3>
        <button
          className="bg-indigo-700 w-32 absolute bottom-2 right-3 rounded-3xl text-white font-medium px-4 py-2"
          onClick={() => dispatch(addToCart({ item }))}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default Card
