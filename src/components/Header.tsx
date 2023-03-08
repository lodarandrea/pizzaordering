import logo from '../img/logo.jpg'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [open, setOpen] = useState(false)

  const navi = [
    { name: 'Home', url: '/' },
    { name: 'Menu', url: '/menu' },
    { name: 'Contact Us', url: '/contact' },
  ]
  return (
    <div className="flex justify-between">
      <img src={logo} alt="logo" />
      <button
        onClick={() => {
          setOpen(!open)
        }}
      >
        <MenuIcon fontSize="large" />
      </button>
      <div className={open ? 'flex flex-col' : 'hidden'}>
        <div>
          {navi.map((naviItem) => (
            <Link to={`${naviItem.url}`} key={naviItem.name}>
              {naviItem.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
