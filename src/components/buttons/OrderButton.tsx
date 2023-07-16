import { Link } from 'react-router-dom'

function OrderButton() {
  return (
    <div className="my-10">
      <Link
        to={'/menu'}
        className="bg-indigo-700 text-xl text-white rounded-lg px-5 py-3 hover:bg-indigo-800 hover:shadow-lg hover:shadow-indigo-900"
      >
        Order Now
      </Link>
    </div>
  )
}

export default OrderButton
