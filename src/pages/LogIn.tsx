import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

function LogIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  return (
    <div className="bg-white ">
      <h1 className="ml-5 text-4xl font-bold border-b-4 w-full border-neutral-800">
        LOG IN
      </h1>
      <form
        className="flex flex-col mx-10 pt-10 pb-20 "
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <input
          type="text"
          {...register('email', { required: 'Email Address is required' })}
          id="email"
          placeholder="email"
          className="text-lg p-1 my-3 border-2 border-neutral-300 rounded-md w-1/3"
        />
        {errors.email && <p>This field is required</p>}
        <input
          type="password"
          {...register('password', { required: 'Password is required' })}
          id="password"
          placeholder="password"
          className="text-lg p-1 my-3 border-2 border-neutral-300 rounded-md w-1/3"
        />
        {errors.password && <p>This field is required</p>}
        <h2 className="font-semibold text-lg">
          Not yet registered?{' '}
          <Link
            to="/registration"
            className="font-semibold text-indigo-800 underline"
          >
            Registration
          </Link>
        </h2>
        <button
          type="submit"
          className="mt-8 w-1/6 bg-indigo-700 text-xl text-white rounded-lg px-5 py-3 hover:bg-indigo-800 hover:shadow-lg hover:shadow-indigo-900"
        >
          Log In
        </button>
      </form>
    </div>
  )
}

export default LogIn
