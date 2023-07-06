import { useEffect, useState } from 'react'
import { customFetch } from '../services/FetchService'
import { MenuItem } from '../components/model/MenuItem'
import Card from '../components/Card'
import Cart from '../components/Cart'
import Loading from '../components/Loading'

function Menu() {
  const [menuItems, setMenuItems] = useState<Array<MenuItem>>([])
  useEffect(() => {
    customFetch('/food', setMenuItems)
  }, [])
  return (
    <div className="my-10 mx-4">
      <div className="font-semibold text-4xl border-b-4 border-neutral-800">
        Menu
      </div>
      {menuItems.length === 0 ? (
        <Loading />
      ) : (
        <div className="my-8 flex">
          {menuItems.map((item) => (
            <div className="basis-1/4" key={item.id}>
              <Card item={item} />
            </div>
          ))}

          <Cart />
        </div>
      )}
    </div>
  )
}

export default Menu
