import OrderButton from '../components/buttons/OrderButton'
import bg from '../img/bg.jpg'

function Home() {
  return (
    <div
      className="py-20 px-32 h-screen w-full"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundColor: 'grey',
        backgroundBlendMode: 'multiply',
        backgroundAttachment: 'scroll',
      }}
    >
      <h1 className="font-bold text-4xl text-white my-3">
        Pizza Man Online Ordering
      </h1>
      <h2 className="font-semibold text-2xl text-white my-3">
        Your Yummy Pizza Delivered Fast & Fresh
      </h2>
      <OrderButton />
    </div>
  )
}

export default Home
