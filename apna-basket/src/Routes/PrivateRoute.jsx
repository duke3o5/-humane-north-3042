import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"



const PrivateRoutes = ({children}) => 
{
    const isAuth = useSelector((store) => store.AuthReducer.isAuth)
   console.log(isAuth)
    const location = useLocation()
    const Data = location.pathname || '/'
    if(!isAuth)
    {
        return <Navigate to ='/login'  replace state={{data : Data }}/>
    }
    return children
}

export { PrivateRoutes }