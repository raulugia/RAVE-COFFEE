import { useEffect, useState } from 'react'
import axiosInstance from '../utils/axiosInstance'
import { useAuth } from '@clerk/clerk-react'
import MainBtn from './MainBtn'
import Stars from '../components/Stars'
import Loading from './Loading'

const Review = ({itemId, type }) => {
    const { getToken } = useAuth()
    const [review, setReview] = useState({
        rating: null,
        text: "",
    })
    const [error, setError] = useState("")

    const handleSubmit = async(e) => {
        e.preventDefault()
        setError("")

        if(!review.rating){
            setError("Please select a rating")
            return
        }

        if(review.text > 800){
            return
        }

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
                }finally{
                    
                }
            }
        )()
    }

    const handleChange = e => {
        const review = e.target.value

        if(review.length > 800){
            return
        }

        setReview(prevReview => ({...prevReview, text: review}))
    }


  return (
    <form>
        <h3 className='font-permanent-marker text-2xl mb-2'>Review This Item</h3>
        <p className='font-fira mb-2'>Tell us what you think about this product</p>
        <Stars setReview={setReview} review={review}/>
        {
            error && <p className='text-red-600 text-xs mb-2'>{error}</p>
        }
        <textarea onChange={e => handleChange(e)}  className='border mt-3 w-full h-[100px] px-2 py-1' placeholder='Write a review...' value={review.text}/>
        <p className={`text-sm text-right mb-10 ${review.text.length >= 800 ? "text-red-600" : "text-slate-400"}`}>{review.text.length}/800</p>
        <MainBtn text="SUBMIT" method={handleSubmit}/>  
    </form>
  )
}

export default Review