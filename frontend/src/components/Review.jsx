import { useEffect, useState } from 'react'
import axiosInstance from '../utils/axiosInstance'
import { useAuth } from '@clerk/clerk-react'
import MainBtn from './MainBtn'
import Stars from '../components/Stars'
import Loading from './Loading'
import { IoCloseOutline } from "react-icons/io5";
import tick from "../assets/tick.svg"

const Review = ({itemId, type, setDisplayReview, setDisplayReviewOption }) => {
    const { getToken } = useAuth()
    const [loading, setLoading] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [review, setReview] = useState({
        rating: null,
        text: "",
    })
    const [error, setError] = useState({
        rating: "",
        text: "",
        submission: ""
    })

    const validateReview= () => {
        let errors = {
            rating: "",
            text: "",
            submission: ""
        }

        setError({
            rating: "",
            text: "",
            submission: ""
        })

        if(!review.rating){
            errors.rating = "Please select a rating"
        }

        if(review.text > 800){
            errors.text = "Review cannot exceed 800 characters"
        }

        if(review.text.trim().length === 0){
            errors.text = "Review cannot be empty"
        }

        setError(errors)

        return !errors.rating && !errors.text
    }

    const handleSubmit = async(e) => {
        e.preventDefault()

        if(!validateReview()){
            return
        }

        (
            async() => {
                try{
                    setLoading(true)
                    const token = await getToken()
                    const { data } = await axiosInstance.post("/add-review", {itemId, type, ...review}, {
                        headers: { Authorization: `Bearer ${token}` }
                    })

                    setReview(data)
                }catch(error){
                    setError(prevError => ({ ...prevError, submission: "Failed to submit review" }))
                }finally{
                    setDisplayReviewOption(false)
                    setSubmitted(true)
                    setLoading(false)
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
    <div className='fixed z-[201] outline w-full h-full top-0 left-0 bg-black/70 flex justify-center items-center'>

        {
            submitted ? (
                <div className='border px-4 py-3 rounded-md bg-white relative'>
                    <div className='flex items-center px-5 md:px-10 py-4 md:py-8 gap-10 bg-white'>
                        <div className='w-[80px] md:w-[150px]'>
                            <img src={tick} alt="tick" />
                        </div>
                        <div>
                            <h3 className='font-permanent-marker text-2xl md:text-3xl mb-2'>Review Submitted!</h3>
                            <p className='font-fira'>Thank you for your feedback</p>
                        </div>
                    </div>
                    <IoCloseOutline size={28} data-testid="close-button" className='absolute top-5 right-5 hover:cursor-pointer' onClick={() => setDisplayReview(false)}/>
                </div>
            ) : (
                <form className='border px-8 py-6 rounded-md bg-white'>
                    <div className='flex justify-between items-center mb-8'>
                        <h3 className='font-permanent-marker text-2xl md:text-3xl'>Review This Item</h3>
                        <IoCloseOutline size={28} data-testid="close-button" className='ml-auto hover:cursor-pointer' onClick={() => setDisplayReview(false)}/>
                    </div>
                    <p className='font-fira mb-2'>Tell us what you think about this product</p>
                    <Stars setReview={setReview} review={review}/>
                    {
                        error.rating && <p className='text-red-600 text-xs mb-2'>{error.rating}</p>
                    }
                    <textarea onChange={e => handleChange(e)}  className='border border-black mt-3 w-full h-[100px] px-2 py-1' placeholder='Write a review...' value={review.text}/>
                    {
                        error.text && <p className='text-red-600 text-xs mb-2'>{error.text}</p>
                    }
                    <p className={`text-sm text-right mb-10 ${review.text.length >= 800 ? "text-red-600" : "text-slate-400"}`}>{review.text.length}/800</p>
                    {
                        error.submission && <p className='text-red-600 text-sm mb-3'>{error.submission}</p>
                    }
                    <MainBtn text="SUBMIT" method={handleSubmit}/>  
                </form>
            )
        }
        
        {
            loading && <Loading />
        }
    </div>
  )
}

export default Review