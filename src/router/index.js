import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { NavBar } from '../views/NavBar/NavBar'
import { SignIn } from '../views/SignIn'
import { SignUp } from '../views/SignUp'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <SignIn />,
  },
  {
    path: '/signUp',
    element: <SignUp />,
  },
])

export default router
