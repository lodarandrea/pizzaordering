import Wave from '../img/wave.png'

function FooterPage() {
  return (
    <div className="bg-white">
      <div className="flex flex-col pt-40 bg-gradient-to-r from-purple-600 to-indigo-600 relative overflow-x-hidden">
        <h1 className="mb-48 text-center font-bold text-7xl text-white">
          Lorem Ipsum
        </h1>
        <div
          className="h-36 absolute bottom-0 -left-full animate-flow3"
          style={{
            backgroundImage: `url(${Wave})`,
            width: '500vw',
            opacity: 0.3,
            backgroundSize: '400px 60px',
            backgroundRepeat: 'repeat-x',
            backgroundPosition: 'bottom',
          }}
        ></div>
        <div
          className="h-16 absolute bottom-0 -left-full animate-flow2 "
          style={{
            backgroundImage: `url(${Wave})`,
            opacity: 0.5,
            width: '500vw',
            backgroundSize: '400px 50px',
            backgroundRepeat: 'repeat-x',
            backgroundPosition: 'bottom',
          }}
        ></div>
        <div
          className="h-12 absolute bottom-0 -left-full animate-flow1"
          style={{
            backgroundImage: `url(${Wave})`,
            width: '500vw',
            backgroundSize: '400px 45px',
            backgroundRepeat: 'repeat-x',
            backgroundPosition: 'bottom',
          }}
        ></div>
      </div>
      <div className="mt-8 mx-5">
        <h2 className="text-2xl font-medium border-b-2 border-b-neutral-700 mb-5">
          Lorem Ipsum
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi sem,
          semper ac dolor sed, efficitur sagittis metus. Integer sit amet purus
          enim. Sed porttitor nulla eu magna pulvinar placerat. Aliquam molestie
          quam quis lorem volutpat, nec eleifend magna ullamcorper. Duis a sem
          eros. Vivamus condimentum facilisis arcu, eu viverra leo fringilla a.
          <br />
        </p>
      </div>
    </div>
  )
}

export default FooterPage
