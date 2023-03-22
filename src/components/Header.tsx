import logo from '../img/pizza.png'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [open, setOpen] = useState(false)

  const navi = [
    { name: 'Home', url: '/' },
    { name: 'Menu', url: '/menu' },
    { name: 'Log In', url: '/login' },
    { name: 'Registration', url: '/registration' },
    { name: 'Contact Us', url: '/contact' },
  ]
  return (
    <div>
      <div className="flex justify-between px-5 py-3 bg-white">
        <Link to={'/'} className="flex items-center">
          <img src={logo} alt="logo" className="w-20 pr-3" />
          <h1 className="font-extrabold text-sm">
            PIZZA <br /> MAN
          </h1>
        </Link>
        <div className="hidden lg:flex lg:items-center">
          {navi.map((naviItem) => (
            <Link
              to={`${naviItem.url}`}
              key={naviItem.name}
              className=" font-bold mx-3"
            >
              {naviItem.name}
            </Link>
          ))}
        </div>
        <button
          onClick={() => {
            setOpen(!open)
          }}
          className="lg:hidden"
        >
          <MenuIcon fontSize="large" />
        </button>
      </div>
      <div>
        <div
          className={
            open
              ? 'absolute top-0 left-0 h-screen z-50 bg-white shadow-lg px-3 border-neutral-300 border-2 rounded-r-lg'
              : 'hidden'
          }
        >
          <Link to={'/'} className="flex items-center mt-7 mb-5">
            <img src={logo} alt="logo" className="w-20 pr-3" />
            <h1 className="font-extrabold text-sm">
              PIZZA <br /> MAN
            </h1>
          </Link>
          <div className="flex flex-col p-2">
            {navi.map((naviItem) => (
              <Link
                to={`${naviItem.url}`}
                key={naviItem.name}
                className="my-2 text-base font-semibold"
              >
                {naviItem.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
