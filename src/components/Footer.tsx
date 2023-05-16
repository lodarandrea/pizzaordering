import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import TwitterIcon from '@mui/icons-material/Twitter'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="bg-white flex w-full justify-around p-5">
      <div className="flex flex-col m-3">
        <h1 className=" font-bold text-2xl tracking-wider mb-2">COMPANY</h1>
        <Link
          to="/footerpage"
          className="font-medium text-lg text-indigo-700 my-1 hover:border-b-2 hover:border-indigo-700 hover:ease-in-out hover:delay-75 hover:duration-100"
        >
          ABOUT US
        </Link>
        <Link
          to="/footerpage"
          className="font-medium text-lg text-indigo-700 my-1 hover:border-b-2 hover:border-indigo-700 hover:ease-in-out hover:delay-75 hover:duration-100"
        >
          FAQ
        </Link>
        <Link
          to="/footerpage"
          className="font-medium text-lg text-indigo-700 my-1 hover:border-b-2 hover:border-indigo-700 hover:ease-in-out hover:delay-75 hover:duration-100"
        >
          CONTACT US
        </Link>
      </div>
      <div className="m-3 flex flex-col">
        <h1 className="font-bold text-2xl tracking-wider mb-2">LEGAL</h1>
        <Link
          to="/footerpage"
          className="font-medium text-lg text-indigo-700 my-1 hover:border-b-2 hover:border-indigo-700 hover:ease-in-out hover:delay-75 hover:duration-100"
        >
          TERMS & CONDITIONS
        </Link>
        <Link
          to="/footerpage"
          className="font-medium text-lg text-indigo-700 my-1 hover:border-b-2 hover:border-indigo-700 hover:ease-in-out hover:delay-75 hover:duration-100"
        >
          PRIVACY POLICY
        </Link>
        <Link
          to="/footerpage"
          className="font-medium text-lg text-indigo-700 my-1 hover:border-b-2 hover:border-indigo-700 hover:ease-in-out hover:delay-75 hover:duration-100"
        >
          TERMS & CONDITIONS
        </Link>
        <Link
          to="/footerpage"
          className="font-medium text-lg text-indigo-700 my-1 hover:border-b-2 hover:border-indigo-700 hover:ease-in-out hover:delay-75 hover:duration-100"
        >
          DISCLAIMER
        </Link>
      </div>
      <div className="m-3">
        <h1 className="font-bold text-2xl tracking-wider mb-2">SOCIAL MEDIA</h1>
        <div className="flex justify-between my-5">
          <FacebookRoundedIcon className="transition-transform hover:scale-150" />
          <InstagramIcon className="transition-transform hover:scale-150 " />
          <YouTubeIcon className="transition-transform hover:scale-150 " />
          <TwitterIcon className="transition-transform hover:scale-150 " />
        </div>
      </div>
    </div>
  )
}

export default Footer
