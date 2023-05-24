interface CardPops {
  imgSrc?: string
  pizzaName?: string
  pizzaIngred?: string
  price?: number
}

function Card({ imgSrc, pizzaName, pizzaIngred, price }: CardPops) {
  return (
    <div className="flex flex-col rounded-xl bg-indigo-100 mx-3 h-full relative">
      <div className="overflow-hidden rounded-t-xl">
        <img
          src={imgSrc}
          alt={pizzaName}
          className="h-48  w-full object-cover object-center  transition hover:scale-110"
        />
      </div>
      <h2 className="text-xl font-medium p-4">{pizzaName}</h2>
      <h3 className="text-lg py-2 px-4">{pizzaIngred}</h3>
      <div className="flex align-bottom py-5">
        <h3 className="text-lg font-medium px-4 py-2 absolute bottom-0">
          {price} Ft
        </h3>
        {/* add to cart comp*/}
      </div>
    </div>
  )
}

export default Card
