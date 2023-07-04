import { useEffect, useState } from 'react'
import { customFetch } from '../services/FetchService'
import { MenuItem } from '../components/model/MenuItem'
import Card from '../components/Card'
import Cart from '../components/Cart'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Menu() {
  const [menuItems, setMenuItems] = useState<Array<MenuItem>>([])
  const [fetchError, setFetchError] = useState('')
  const toastId = 'toastCustomId'
  useEffect(() => {
    customFetch('/fod', setMenuItems, setFetchError)
  }, [])

  if (fetchError) {
    toast.error('Error! Failed to load the data!', {
      position: 'top-center',
      toastId: toastId,
    })
  }

  return (
    <div className="my-10 mx-4">
      <div className="font-semibold text-4xl border-b-4 border-neutral-800">
        <h1>Menu</h1>
      </div>
      <div className="my-8 flex">
        {menuItems.map((item) => (
          <div className="basis-1/4" key={item.id}>
            <Card item={item} />
          </div>
        ))}

        <Cart />
      </div>
    </div>
  )
}

export default Menu
