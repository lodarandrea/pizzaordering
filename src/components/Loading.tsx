import Pizza from '../img/pizza.png'

function Loading() {
  return (
    <div className="flex justify-center items-center w-full my-40 ">
      <img
        src={Pizza}
        alt="loading"
        className="w-1/12 motion-safe:animate-pulse"
      />
      <h1 className="font-bold text-3xl ml-10">Loading</h1>
    </div>
  )
}

export default Loading
