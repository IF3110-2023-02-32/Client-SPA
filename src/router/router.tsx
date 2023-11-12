import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from '../component/Login'
import TweetAnalytic from '../component/TweetAnalytic'
import Home from '../component/Home'

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
    
  ])
  
  const Routes = () => {
    return <RouterProvider router={routesList} />
  }
  
  export default Routes