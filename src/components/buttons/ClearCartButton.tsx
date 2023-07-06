import { clearCart } from '../../store/CartSlice'
import { useAppDispatch } from '../../store/Hooks'

function ClearCartButton() {
  const dispatch = useAppDispatch()
  return (
    <div className="m-1">
      <button
        onClick={() => {
          dispatch(clearCart())
        }}
        className="bg-red-400 text-lg text-white rounded-lg px-3 py-2 hover:bg-red-600 hover:shadow-lg hover:shadow-red-800"
      >
        Clear Cart
      </button>
    </div>
  )
}

export default ClearCartButton
