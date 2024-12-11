import { useState, useEffect, useRef} from 'react'
import StarRating from './StarRating'
import Loading from './Loading'
import axiosInstance from '../utils/axiosInstance'
import Pagination from './Pagination'
import ReviewCard from './ReviewCard'
import { IoCloseOutline } from "react-icons/io5";


const ReviewsModal = ({itemId, type, averageRating, itemName, setDisplayReviews}) => {
    const [reviews, setReviews] = useState([])
    const [totalReviews, setTotalReviews] = useState(null)
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const modalRef = useRef(null)

    const transformDate = (isoDateString) => {
        const date = new Date(isoDateString);
      
        const day = String(date.getDate()).padStart(2, '0')
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const year = date.getFullYear()
      
        return `${day}/${month}/${year}`;
      };

    useEffect(() => {
        (
            async() => {
                setLoading(true)
                if(modalRef.current){
                    modalRef.current.scrollTo(0,0)
                }

                try{
                    const {data} = await axiosInstance.get(`/item/${itemId}/reviews`, {
                        params: { type, page },
                    })
                    const formattedReviews = data.reviews.map(review => ({...review, createdAt: transformDate(review.createdAt)}))

                    setReviews(formattedReviews)
                    setTotalReviews(data.totalReviews)
                }catch(error){
                    console.error(error)
                    alert("There was an error getting the reviews. Please try again")
                }finally{
                    setLoading(false)
                }
            }
        )()
    }, [itemId, type, page])

    useEffect(() => {
        document.body.style.overflow = 'hidden'
    }, [])

    const closeModal = () => {
        document.body.style.overflow = 'auto'
        setDisplayReviews(false)
    }

  return (
    <div className='fixed z-[201] left-0 bottom-0 w-full bg-black/60 flex justify-center items-center min-h-full'>
        <div className='relative w-[95%] md:w-[60%] max-w-[900px] h-[800px] md:h-[940px]' ref={modalRef}>
            <div className='absolute -right-1 md:-right-3 -top-[15px] bg-black rounded-full' onClick={closeModal}>
                <IoCloseOutline size={30} data-testid="close-button" className='hover:cursor-pointer text-white' />
            </div>
            <div className='w-full bg-white px-5 pt-8 h-full overflow-y-scroll flex flex-col justify-between'>
                <div>
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
                                    <ReviewCard key={index} name={review.user.name} surname={review.user.surname} rating={review.rating} review={review.review} createdAt={review.createdAt}/>
                                ))
                            )
                        }
                    </div>  
                </div>
                <div className="py-5">
                    <Pagination setPage={setPage} page={page} totalItems={totalReviews} itemsPerPage={8}/>
                </div>
            </div>
        </div>
        {
            loading && <Loading />
        }
    </div>
  )
}

export default ReviewsModal