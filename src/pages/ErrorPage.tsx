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
          <h1>404</h1>
          <p>Page not found!</p>
        </div>
      ) : (
        <div className="errorPage">
          <h1>NO PIZZA TODAY</h1>
          <p>Something went wrong!</p>
        </div>
      )}
    </div>
  )
}

export default ErrorPage
