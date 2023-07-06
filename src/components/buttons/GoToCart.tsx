import { Link } from 'react-router-dom'

function GoToCart() {
  return (
    <div className="mt-5">
      <Link
        to={'/cart'}
        className=" bg-indigo-700 text-xl py-3 px-3 text-white rounded-b-xl hover:bg-indigo-800 m-0 block w-full "
      >
        Go To Cart
      </Link>
    </div>
  )
}

export default GoToCart
