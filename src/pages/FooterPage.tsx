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
            backgroundSize: '600px 60px',
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
            backgroundSize: '500px 50px',
            backgroundRepeat: 'repeat-x',
            backgroundPosition: 'bottom',
          }}
        ></div>
        <div
          className="h-12 absolute bottom-0 -left-full animate-flow1"
          style={{
            backgroundImage: `url(${Wave})`,
            width: '500vw',
            backgroundSize: '450px 45px',
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
          Aenean at odio pretium mauris placerat fermentum. Maecenas nec sodales
          eros, quis tempus velit. Vestibulum faucibus nulla libero, sit amet
          eleifend purus aliquet nec. In semper commodo lorem, at gravida massa
          dignissim sed. Praesent interdum enim purus, eu laoreet nulla porta
          sit amet. Quisque commodo lacus nec risus accumsan vestibulum. Integer
          in ligula dignissim turpis egestas laoreet sed id libero. Curabitur at
          rhoncus nibh, in commodo ante. Phasellus eleifend consequat diam, at
          fermentum nisl. Integer eget dignissim tellus. Praesent vel magna
          facilisis arcu sodales dignissim et eu nisi. Nam fermentum elit
          vehicula, scelerisque nisl in, mollis lorem. <br /> Vivamus imperdiet,
          sapien vel sollicitudin pretium, sem turpis semper diam, non
          condimentum turpis quam ac velit. Quisque ultrices, libero a fermentum
          imperdiet, dolor orci hendrerit odio, vel cursus enim elit sed urna.
          Fusce tempor elit sem, ac convallis magna euismod vel. Vivamus
          tincidunt est at pharetra vestibulum. Phasellus semper metus tellus,
          sed vestibulum mi consectetur id. Suspendisse porttitor neque sit amet
          felis imperdiet, ac congue purus cursus. Fusce justo lorem, imperdiet
          quis massa nec, malesuada aliquet diam. Nullam sollicitudin ex eu
          justo porttitor, non dictum nibh auctor. Vestibulum accumsan urna non
          turpis mollis ultrices. Integer facilisis finibus dolor nec viverra.{' '}
          <br />
          Integer urna quam, efficitur non eleifend eget, euismod vitae nunc.
          Vestibulum dapibus eleifend leo, sagittis dapibus erat pellentesque
          nec. Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Phasellus convallis pretium maximus. Nam
          venenatis felis quis tempor elementum. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Curabitur euismod iaculis mi, at euismod
          lectus ornare non. Nulla sed odio sed orci elementum volutpat. Sed
          scelerisque dapibus enim vel semper. Donec id dolor pretium, aliquet
          est sit amet, tempus odio. Morbi nec risus tincidunt, pharetra velit
          vitae, pulvinar sapien. Mauris aliquam bibendum nisi, vel pharetra mi
          tempor a. Etiam sollicitudin vehicula elit, vel scelerisque justo.
          Curabitur ultricies molestie lacinia. Etiam ac rhoncus ante, vel
          aliquet est. In sed fringilla magna, a luctus nunc.
          <br /> Proin vitae est in turpis accumsan dapibus nec vitae enim.
          Praesent velit lorem, ornare nec lorem luctus, tristique euismod
          tortor. Vestibulum nec nunc sodales, placerat tortor sed, scelerisque
          justo. Nullam bibendum velit in mauris placerat, id dictum massa
          tempus. Donec purus neque, maximus nec fringilla ultricies, varius
          vitae odio. Aliquam euismod vulputate elementum. Sed vel elit eget ex
          rhoncus mattis. Ut fermentum placerat magna nec lobortis. Morbi
          vehicula ultricies lectus, sit amet sodales ipsum commodo in. Nam quis
          convallis lacus, ut placerat nibh. Morbi feugiat risus a neque aliquet
          viverra. Aliquam et augue semper, tempus risus ac, condimentum felis.
          Praesent et consequat ligula, sit amet convallis ante.
        </p>
      </div>
    </div>
  )
}

export default FooterPage
