import CartItemComponent from './CartItemComponent'
import { useAppSelector } from '../store/Hooks'
import ClearCartButton from './buttons/ClearCartButton'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import GoToCart from './buttons/GoToCart'

function Cart() {
  const cart = useAppSelector((state) => state.cart)
  const total = cart?.reduce(
    (previousTotal, item) => previousTotal + item.quantity * item.card.price,
    0
  )

  return (
    <div className="flex flex-col  bg-neutral-300 p-2 rounded-xl max-h-96  relative">
      {cart.length > 0 ? (
        <>
          <div className="overflow-auto mb-20">
            <div className="w-full flex justify-between items-baseline ">
              <h1 className="text-2xl font-medium">Cart</h1>
              <ClearCartButton />
            </div>
            <div>
              {cart?.map((item) => (
                <CartItemComponent item={item} />
              ))}
            </div>
          </div>
          <div className="absolute -bottom-7 right-0 left-0 ">
            <h3 className="px-2 font-bold text-xl">Total: {total}</h3>
            <GoToCart />
          </div>
        </>
      ) : (
        <>
          <h1 className="text-2xl font-medium">Cart</h1>
          <div className=" my-20 text-center">
            <ShoppingBagOutlinedIcon fontSize="large" />
            <p className="text-4xl font-semibold pt-8">Cart is Empty!</p>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart
