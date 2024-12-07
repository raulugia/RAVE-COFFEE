import { useEffect, useState } from 'react'
import axiosInstance from '../utils/axiosInstance'
import { useAuth } from '@clerk/clerk-react'
import MainBtn from './MainBtn'
import Stars from '../components/Stars'

const Review = ({itemId, type }) => {
    const { getToken } = useAuth()
    const [hasPurchased, setHasPurchased] = useState(false)
    const [review, setReview] = useState({
        rating: null,
        text: null,
    })

    useEffect(() => {
        (
            async() => {
                try{
                    const token = await getToken()
                    const { data } = await axiosInstance.get(`/orders/hasPurchased/${itemId}`, {
                        headers: { Authorization: `Bearer ${token}` },
                        params: { type }, 
                    })

                    if(data.hasPurchased) {
                        console.log("yes")
                        setHasPurchased(true)
                    }
                }catch(error){
                    console.error("error",error)
                }
            }
        )()
    },[itemId, type]);

    const handleSubmit = async(e) => {
        e.preventDefault()
        (
            async() => {
                try{
                    const token = await getToken()
                    const { data } = await axiosInstance.post("/add-review", {itemId, type, ...review}, {
                        headers: { Authorization: `Bearer ${token}` }
                    })

                    setReview(data)
                }catch(error){
                    console.error(error)
                }
            }
        )()
    }

  return (
    <form>
        {
            hasPurchased && (
                <div>
                    <h3 className='font-permanent-marker text-2xl mb-2'>Review This Item</h3>
                    <p className='font-fira mb-2'>Tell us what you think about this product</p>
                    <Stars setReview={setReview} review={review}/>
                    <textarea className='border mt-3 w-full h-[100px] mb-5 px-2 py-1' placeholder='Write a review...' />
                    <MainBtn text="SUBMIT" method={handleSubmit}/>
                </div>
            )
        }
    </form>
  )
}

export default Review