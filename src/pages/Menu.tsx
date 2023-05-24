import { useEffect, useState } from 'react'
import { customFetch } from '../Services/FetchService'
import { MenuCard } from '../components/model/MenuCard'
import Card from '../components/Card'

function Menu() {
  const [menuItems, setMenuItems] = useState<Array<MenuCard>>([])
  useEffect(() => {
    customFetch('/food', setMenuItems)
  }, [])
  console.log(menuItems)
  return (
    <div className="m-10">
      <div className="font-semibold text-4xl border-b-4 border-neutral-800">
        <h1>Menu</h1>
      </div>
      <div className="my-8 flex relative">
        {menuItems.map((item) => (
          <div className="basis-1/3" key={item.name}>
            <Card
              imgSrc={item.imageUrl}
              pizzaName={item.name}
              pizzaIngred={item.ing}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Menu
