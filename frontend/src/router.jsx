import {createBrowserRouter, Navigate} from 'react-router-dom'
import DefaultLayout from './components/DefaultLayout.jsx'
import GuestLayout from './components/GuestLayout.jsx'
import Dashboard from './views/Dashboard.jsx'
import Login from './views/Login.jsx'
import NotFound from './views/NotFound.jsx'
import SignUp from './views/SignUp.jsx'
import Users from './views/Users.jsx'

const router = createBrowserRouter([
    {
        path:'/',
        element: <DefaultLayout/>,
        children:[
            {
                path:'/',
                element: <Navigate to="/users"/>
            },
            {
                path:'/users',
                element: <Users/>
            },
            {
                path:'/dashboard',
                element: <Dashboard/>
            }
        ]
    },
    {
        path:'/',
        element: <GuestLayout/> , 
        children:[
            {
                path:'/login',
                element: <Login/>
            },
            {
                path:'/signup',
                element: <SignUp/>
            }
        ]
    },
   
  
    {
        path:'*',
        element: <NotFound/>
    }
])

export default router