import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

function Registration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <div className="bg-white">
      <h1 className="pl-5 pt-10 font-semibold text-4xl border-b-4 border-neutral-800">
        REGISTRATION
      </h1>
      <form
        className="flex flex-col mx-10 pt-10 pb-20 "
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <input
          type="email"
          {...register('email', {
            required: 'Email required!',
            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          })}
          id="email"
          placeholder="email"
          className="text-lg p-1 my-3 border-2 border-neutral-300 rounded-md w-1/3"
        />
        {errors.email && <p>{`${errors.email.message}`}</p>}
        <input
          type="password"
          {...register('password', { required: 'Password required!' })}
          placeholder="password"
          className="text-lg p-1 my-3 border-2 border-neutral-300 rounded-md w-1/3"
        />
        {errors.password && <p>{`${errors.password.message}`}</p>}
        <input
          type="password"
          {...register('confirmPassword', {
            required: true,
            validate: (passwordAgain, formValues) => {
              if (passwordAgain !== formValues.password) {
                return 'The 2 password are not matching!'
              }
            },
          })}
          id="confirmPassword"
          placeholder="confirm password"
          className="text-lg p-1 my-3 border-2 border-neutral-300 rounded-md w-1/3"
        />
        {errors.confirmPassword && <p>{`${errors.confirmPassword.message}`}</p>}
        <h2 className="text-lg font-semibold">
          Already registered?{' '}
          <Link
            to={'/login'}
            className="font-semibold text-indigo-800 underline hover:font-bold"
          >
            Log In
          </Link>
        </h2>
        <button
          type="submit"
          className="mt-8 w-1/6 bg-indigo-700 text-xl text-white rounded-lg px-5 py-3 hover:bg-indigo-800 hover:shadow-lg hover:shadow-indigo-900"
        >
          Registration
        </button>
      </form>
    </div>
  )
}

export default Registration
