import { useState, useEffect} from 'react'
import StarRating from './StarRating'
import Loading from './Loading'
import axiosInstance from '../utils/axiosInstance'
import Pagination from './Pagination'
import ReviewCard from './ReviewCard'


const ReviewsModal = ({itemId, type, averageRating, itemName}) => {
    const [reviews, setReviews] = useState([])
    const [totalReviews, setTotalReviews] = useState(null)
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)

    const transformDate = (isoDateString) => {
        const date = new Date(isoDateString);
      
        const day = String(date.getDate()).padStart(2, '0')
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const year = date.getFullYear()
      
        return `${day}/${month}/${year}`;
      };

    useEffect(() => {
        //setLoading(true)
        
        (
            async() => {
                try{
                    const {data} = await axiosInstance.get(`/item/${itemId}/reviews`, {
                        params: { type, page },
                    })
                    console.log(data)
                    const formattedReviews = data.reviews.map(review => ({...review, createdAt: transformDate(review.createdAt)}))
                    //setReviews(formattedReviews)
                    setReviews(prevRev => [...prevRev, ...formattedReviews])
                    setTotalReviews(data.totalReviews)
                }catch(error){
                    console.error(error)
                    alert("There was an error getting the reviews. Please try again")
                }finally{
                    //setLoading(false)
                }
            }
        )()
    }, [itemId, type, page])

  return (
    <div className='fixed z-[201] left-0 bottom-0 w-full bg-black/60 flex justify-center items-center min-h-full'>
        <div className='w-[60%] bg-white px-5 pt-8'>
            <div className='flex justify-between items-center'>
                <div>
                    <h2 className='text-2xl font-permanent-marker'>{itemName}</h2>
                </div>
                <div className='flex gap-3 items-center'>
                    <h2 className='font-bold text-2xl'>{averageRating}</h2>
                    <StarRating rating={averageRating} />
                </div>
            </div>
            <div className='h-[1px] my-8 w-full bg-gray-300'></div>
            <div className=''>
                {
                    reviews && (
                        reviews.map((review, index) => (
                            <div key={index} className=''>
                                <div  className='flex'>
                                    <div className='flex flex-col w-1/3 border-r border-gray-300'>
                                        <div className='bg-gray-200 mb-5 w-[70px] h-[70px] rounded-full flex items-center justify-center'>
                                            <p className='text-lg font-bold'>{review.user.name[0].toUpperCase()}{review.user.surname[0].toUpperCase()}</p>
                                        </div>
                                        <p className='ml-2 text-lg font-semibold'>{review.user.name} {review.user.surname}</p>
                                    </div>
                                    <div className='w-2/3 ml-8 flex flex-col justify-between font-fira'>
                                        <div className='mb-8'>
                                            <StarRating rating={review.rating} />
                                            <p className='mt-2'>{review.review}</p>
                                        </div>
                                        <div className='ml-auto'>
                                            <p className='text-gray-500 text-sm'>Reviewed on {review.createdAt}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='h-[1px] my-8 w-full bg-gray-300'></div>
                                <ReviewCard name={review.user.name} surname={review.user.surname} rating={review.rating} review={review.review}/>
                            </div>
                        ))
                    )
                }
            </div>  
            <div className="py-5">
                <Pagination setPage={setPage} page={page} totalItems={totalReviews} itemsPerPage={8}/>
            </div>
        </div>
    </div>
  )
}

export default ReviewsModal