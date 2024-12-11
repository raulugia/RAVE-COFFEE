import { useState, useEffect} from 'react'
import StarRating from './StarRating'
import Loading from './Loading'
import axiosInstance from '../utils/axiosInstance'

const ReviewsModal = ({itemId, type}) => {
    const [reviews, setReviews] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)

    useEffect(() => {
        //setLoading(true)
        
        (
            async() => {
                try{
                    const {data} = await axiosInstance.get(`/item/${itemId}/reviews`, {
                        params: { type, page },
                    })
                    console.log(data)
                    setReviews(data)
                }catch(error){
                    console.error(error)
                    alert("There was an error getting the reviews. Please try again")
                }finally{
                    //setLoading(false)
                }
            }
        )()
    }, [itemId, type])

  return (
    <div className='fixed z-[201] left-0 bottom-0 w-full bg-black/60 flex justify-center items-center min-h-full'>
        <div className='w-1/2 bg-white'>
            <div className=''>
                {
                    reviews && (
                        reviews.map((review, index) => (
                            <div key={index} className='pt-8'>
                                <div  className='flex px-5'>
                                    <div className='flex flex-col w-1/3'>
                                        <div className='bg-gray-200 w-[70px] h-[70px] rounded-full flex items-center justify-center'>
                                            <p className='text-lg font-bold'>{review.user.name[0].toUpperCase()}{review.user.surname[0].toUpperCase()}</p>
                                        </div>
                                        <p className='ml-2'>{review.user.name}{review.user.surname}</p>
                                    </div>
                                    <div>
                                        <StarRating rating={review.rating} />
                                        <p>{review.review}sxjnwqksjnxkswqn jkdnjk xqnj kdnkq wjndjknkwqn dkjwqnj</p>
                                    </div>
                                </div>
                                <div className='h-[1px] my-8 w-full bg-gray-100'></div>
                            </div>
                        ))
                    )
                }
            </div>  
            <div>
                {
                  Array.from({length: Math.floor(reviews.length/8)}, (review, index) => (
                    <button key={index} onClick={() => setPage(index+1)} className={`font-fira text-lg px-5 py-2 ${page === index+1? 'bg-gray-300' : 'bg-white'}`}>{index+1}</button>
                  ))  
                }
            </div>
        </div>
    </div>
  )
}

export default ReviewsModal