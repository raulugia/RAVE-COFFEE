import { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import axiosInstance from '../utils/axiosInstance'
import Loading from '../components/Loading'
import CoffeeDetailsCard from '../components/CoffeeDetailsCard'
import ItemQuantityCard from '../components/ItemQuantityCard'
import Review from '../components/Review'
import { useUser } from '@clerk/clerk-react'
import StarRating from '../components/StarRating'
import ReviewsModal from '../components/ReviewsModal'
import Error from '../components/Error'
import { useBasket } from '../context/BasketContext'
import { useAuth } from '@clerk/clerk-react'

const ItemPage = () => {
    const { id } = useParams()
    const { user, isLoaded } = useUser()
    const [item, setItem] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const {setErrorData} = useBasket()

    const [displayReviewOption, setDisplayReviewOption] = useState(false)
    const [displayReview, setDisplayReview] = useState(false)

    const [displayReviews, setDisplayReviews] = useState(false)

    const location = useLocation()
    const type = location.pathname.includes("/coffee") ? "coffee" : "equipment"

    const { getToken } = useAuth()

    useEffect(() => {
        setLoading(true)
        setErrorData(null)
        if(id && isLoaded) {
            (
                async() => {
                    try{
                        let response;
                        if(user){
                            const token = await getToken()
                            response = await axiosInstance.get(`/item/${id}/authenticated`, {
                                headers: { Authorization: `Bearer ${token}` },
                                params: { type },
                            })
                        }else {
                            response = await axiosInstance.get(`/item/${id}`, {
                                params: { type },
                            })
                        }
                        setItem(response.data.item)

                        if(response.data.pendingReview) {
                            setDisplayReviewOption(true)
                        }
                    }catch(error){
                        setErrorData({
                            header: "Error fetching item information",
                            text: "There was an error getting the item information. Please try again",
                        })
                    }finally{
                        setLoading(false)
                    }
                }
            )()
        }
    }, [id, isLoaded])

    if(loading) return <Loading />

  return (
    <div className='my-10'>
        {
            item && (
                <div className='flex flex-col items-center lg:items-stretch lg:flex-row md:mb-0 md:px-5'>
                    <div className='md:w-1/2 md:min-w-1/2'>
                        <img src={item.pictureUrl} alt={item.name} />
                    </div>

                    <div className='md:w-1/2 md:px-16 mt-5 lg:mt-0 flex flex-col items-center px-5'>
                        <div className='flex flex-col items-start justify-between h-full'>
                            <div className='flex flex-col items-start'>
                                <div className={`${type === "coffee" ? "mb-10" : ""}`}>
                                    <h1 className='font-permanent-marker text-3xl md:text-4xl mb-5'>{item.name}</h1>
                                    {
                                        item.averageRating && <StarRating rating={item.averageRating} setDisplayReviews={setDisplayReviews}/>
                                    }
                                    {
                                        user && displayReviewOption && <p className='underline mb-2 text-sm hover:cursor-pointer' onClick={() => setDisplayReview(true)}>Review Item</p>
                                    }
                                    <p className='font-fira font-semibold text-lg'>£{item.price.toFixed(2)}</p>
                                </div>

                                {
                                    type === "coffee" && (
                                        <CoffeeDetailsCard taste={item.taste} roast={item.roast}/>
                                    )
                                }

                                <div className="max-w-[400px] max-h-[400px] overflow-auto my-10 font-fira">
                                    {item.description}
                                </div>

                                <ItemQuantityCard {...item}/>
                            </div>

                            {
                                user && displayReview && (
                                    <Review itemId={item.id} type={type} setDisplayReview={setDisplayReview} setDisplayReviewOption={setDisplayReviewOption}/>
                                )
                            }
                            {
                                displayReviews && (
                                    <ReviewsModal itemId={item.id} type={type} averageRating={item.averageRating} itemName={item.name} setDisplayReviews={setDisplayReviews}/>
                                )
                            }
                        </div>
                    </div>
                </div>
            )
        }
        {/* {
            error && <Error header={error.header} text={error.text} />
        } */}
    </div>
  )
}

export default ItemPage