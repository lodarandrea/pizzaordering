import { useEffect, useState } from 'react'
import { customFetch } from '../Services/FetchService'
import { MenuCard } from '../components/model/MenuCard'
import Card from '../components/Card'
import Cart from '../components/Cart'

function Menu() {
  const [menuItems, setMenuItems] = useState<Array<MenuCard>>([])
  useEffect(() => {
    customFetch('/food', setMenuItems)
  }, [])
  console.log(menuItems)

  return (
    <div className="my-10 mx-4">
      <div className="font-semibold text-4xl border-b-4 border-neutral-800">
        <h1>Menu</h1>
      </div>
      <div className="my-8 flex">
        {menuItems.map((item) => (
          <div className="basis-1/4" key={item.name}>
            <Card
              id={item.id}
              imgSrc={item.imageUrl}
              name={item.name}
              pizzaIngred={item.ing}
              price={item.price}
            />
          </div>
        ))}

        <Cart />
      </div>
    </div>
  )
}

export default Menu
