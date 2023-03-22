import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import TwitterIcon from '@mui/icons-material/Twitter'

function Footer() {
  return (
    <div className="bg-white flex w-full justify-around p-5">
      <div className="m-3">
        <h1 className="font-bold text-2xl tracking-wider mb-2">COMPANY</h1>
        <h3 className="font-medium text-lg text-indigo-700 my-1 hover:border-b-2 hover:border-indigo-700 hover:ease-in-out hover:delay-75 hover:duration-100">
          ABOUT US
        </h3>
        <h3 className="font-medium text-lg text-indigo-700 my-1 hover:border-b-2 hover:border-indigo-700 hover:ease-in-out hover:delay-75 hover:duration-100">
          FAQ
        </h3>
        <h3 className="font-medium text-lg text-indigo-700 my-1 hover:border-b-2 hover:border-indigo-700 hover:ease-in-out hover:delay-75 hover:duration-100">
          CONTACT US
        </h3>
      </div>
      <div className="m-3">
        <h1 className="font-bold text-2xl tracking-wider mb-2">LEGAL</h1>
        <h3 className="font-medium text-lg text-indigo-700 my-1 hover:border-b-2 hover:border-indigo-700 hover:ease-in-out hover:delay-75 hover:duration-100">
          TERMS & CONDITIONS
        </h3>
        <h3 className="font-medium text-lg text-indigo-700 my-1 hover:border-b-2 hover:border-indigo-700 hover:ease-in-out hover:delay-75 hover:duration-100">
          PRIVACY POLICY
        </h3>
        <h3 className="font-medium text-lg text-indigo-700 my-1 hover:border-b-2 hover:border-indigo-700 hover:ease-in-out hover:delay-75 hover:duration-100">
          TERMS & CONDITIONS
        </h3>
        <h3 className="font-medium text-lg text-indigo-700 my-1 hover:border-b-2 hover:border-indigo-700 hover:ease-in-out hover:delay-75 hover:duration-100">
          DISCLAIMER
        </h3>
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
