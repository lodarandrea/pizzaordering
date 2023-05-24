import Wave from '../img/wave.png'

function FooterPage() {
  return (
    <div>
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
      <div className="mt-8 mb-32 mx-5">
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac
          turpis sit amet magna consequat hendrerit. Proin pellentesque placerat
          tempus. Nam iaculis varius tellus. Ut pulvinar tincidunt mauris sed
          mattis. Fusce in justo velit. Vestibulum a lorem vitae lectus
          vestibulum semper ut et tortor. Sed pulvinar, justo placerat hendrerit
          consectetur, dolor dolor dignissim orci, vitae vulputate dui magna
          vitae orci. Pellentesque ipsum urna, fermentum eget nulla maximus,
          viverra rutrum mi. Cras eu sapien vitae diam accumsan accumsan vel
          eget purus. Praesent viverra semper erat in consequat. <br /> In
          vehicula vulputate lorem, sed luctus est pulvinar nec. Quisque finibus
          et nibh eget pellentesque. Praesent at interdum elit. Ut luctus
          gravida libero, iaculis mollis tellus rutrum at. Curabitur dui est,
          posuere a quam quis, malesuada euismod dolor. Nam nisi diam, molestie
          ut turpis eu, commodo feugiat nisl. Curabitur elementum tortor nec
          ornare laoreet. Integer tellus lectus, aliquet a lectus sed, hendrerit
          rhoncus massa. Vestibulum ante dui, finibus vitae efficitur varius,
          convallis fermentum lorem. Morbi pellentesque vulputate est et dictum.
          Praesent a sapien ac diam luctus eleifend quis ac mi. Pellentesque
          eleifend tristique congue. Ut sollicitudin sagittis neque vitae
          pulvinar. <br />
          Phasellus eget molestie leo, sed fermentum odio. Morbi molestie lorem
          ac massa dictum, vel lacinia purus aliquet. Curabitur varius enim nec
          dictum aliquam. Nullam vestibulum maximus luctus. Donec luctus congue
          diam, vitae auctor felis tincidunt vel. Maecenas ex mauris, pulvinar
          at enim et, dictum bibendum arcu. Nullam et enim vel mauris rutrum
          placerat.
        </p>
      </div>
    </div>
  )
}

export default FooterPage
