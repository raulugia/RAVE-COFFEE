import { useState, useEffect} from 'react'
import Loading from '../components/Loading'
import axiosInstance from '../utils/axiosInstance'
import { useAuth } from '@clerk/clerk-react'
import Address from '../components/Address'
import { useBasket } from "../context/BasketContext"

const AccountDetails = () => {
    const [userDetails, setUserDetails] = useState(null)
    const [address, setAddress] = useState(null)
    const [loading, setLoading] = useState(false)
    const { getToken } = useAuth()
    const { setErrorData } = useBasket()

    useEffect(() => {
        (
            async() => {
                setLoading(true)
                setErrorData(null)

                try{
                    const token = await getToken()
                    const {data} = await axiosInstance.get("/account/details", {
                        headers: { Authorization: `Bearer ${token}` }
                    })
                    console.log(data)
                    setAddress(data.address)
                    setUserDetails(data)
                }catch(error){
                    setErrorData({
                        header: "Error fetching your data",
                        text: "There was an error fetching your data. Please try again.",
                    })
                }finally{
                    setLoading(false)
                }
            }
        )()
    }, [])



    if(loading) return <Loading />

  return (
    <div className='px-[8%]'>
        {
            userDetails && (
                <div className='font-fira mt-8 flex gap-10 md:gap-5 flex-col md:flex-row md:justify-around items=start'>
                    <div>
                        <h1 className='font-permanent-marker text-3xl mb-5'>YOUR DETAILS</h1>
                        <div className='flex flex-col gap-3'>
                            {
                                Object.keys(userDetails).map((key, index) => (
                                    key !== "address" && (
                                    <p key={index}><span className="font-semibold">{key.charAt(0).toUpperCase() + key.slice(1)}:</span> {userDetails[key]}</p>
                                )))
                            }
                        </div>
                    </div>

                   <div>
                        <h1 className='font-permanent-marker text-3xl mb-5'>YOUR ADDRESS</h1>
                        <Address address={address} setAddress={setAddress} setUserDetails={setUserDetails} setLoading={setLoading}/>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default AccountDetails