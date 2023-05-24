import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import LogIn from './pages/LogIn'
import Registration from './pages/Registration'
import FooterPage from './pages/FooterPage'
import Menu from './pages/Menu'

function App(): JSX.Element {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/login',
          element: <LogIn />,
        },
        {
          path: '/registration',
          element: <Registration />,
        },
        {
          path: '/footerpage',
          element: <FooterPage />,
        },
        {
          path: '/menu',
          element: <Menu />,
        },
      ],
    },
  ])
  return <RouterProvider router={router} />
}

export default App
