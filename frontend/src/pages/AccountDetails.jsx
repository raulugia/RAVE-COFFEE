import { useState, useEffect} from 'react'
import Loading from '../components/Loading'
import axiosInstance from '../utils/axiosInstance'
import { useAuth } from '@clerk/clerk-react'

const AccountDetails = () => {
    const [userDetails, setUserDetails] = useState(null)
    const [loading, setLoading] = useState(false)
    const { getToken } = useAuth()

    useEffect(() => {
        (
            async() => {
                setLoading(true)
                try{
                    const token = await getToken()
                    const {data} = await axiosInstance.get("/account/details", {
                        headers: { Authorization: `Bearer ${token}` }
                    })
                    console.log(data)
                    setUserDetails(data)
                }catch(error){
                    alert('Failed to fetch user details')
                }finally{
                    setLoading(false)
                }
            }
        )()
    }, [])



    if(loading) return <Loading />

  return (
    <div>AccountDetails</div>
  )
}

export default AccountDetails