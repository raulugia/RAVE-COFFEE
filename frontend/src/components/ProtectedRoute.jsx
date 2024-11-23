import { useEffect } from 'react'
import { useAuth } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const { isSignedIn } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if(!isSignedIn) {
            navigate('/login')
        }
    }, [isSignedIn])

  return (
    <Outlet />
  )
}

export default ProtectedRoute