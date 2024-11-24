import { useEffect } from 'react'
import { useAuth } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
    const { isSignedIn, isLoaded } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if(!isSignedIn && isLoaded) {
            navigate('/login')
        }
    }, [isSignedIn, isLoaded])

  return (
    <Outlet />
  )
}

export default ProtectedRoute