import { useRouteError } from 'react-router-dom'
import errorBg from '../img/pizza-4812083.jpg'

function ErrorPage() {
  const error = useRouteError() as any

  return (
    <div
      style={{
        backgroundImage: `url(${errorBg})`,
        backgroundSize: 'cover',
      }}
      className="h-screen flex justify-end"
    >
      {error.status === 404 ? (
        <div className="errorPage">
          <h1>{error.status}</h1>
          <p>Page not found!</p>
        </div>
      ) : (
        <div className="errorPage">
          <h1>SORRY, NO PIZZA TODAY</h1>
          <p>Something went wrong!</p>
          <p>{error.status}</p>
          <p> {error.statusText}</p>
        </div>
      )}
    </div>
  )
}

export default ErrorPage
