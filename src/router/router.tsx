import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from '../component/Login'
import TweetAnalytic from '../component/TweetAnalytic'
import Home from '../component/Home'
import Register from '../component/Register'

const routesList = createBrowserRouter([
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/home',
        element: <Home />,
    },
    {
        path: '/tweet-analytic?',
        element: <TweetAnalytic />,
    },
    {
        path: '/register',
        element: <Register />,
    },
    {
        path: '/',
        element: <Login />,
    },
    
  ])
  
  const Routes = () => {
    return <RouterProvider router={routesList} />
  }
  
  export default Routes