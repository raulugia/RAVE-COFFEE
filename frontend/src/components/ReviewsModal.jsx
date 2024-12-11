import { useState, useEffect} from 'react'
import StarRating from './StarRating'
import Loading from './Loading'

const ReviewsModal = ({itemId, type}) => {
    const [reviews, setReviews] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        (
            async() => {
                try{
                    const {data} = await axiosInstance.get(`/item/${itemId}/reviews`, {
                        params: { type },
                    })
                    setReviews(data)
                }catch(error){
                    console.error(error)
                    alert("There was an error getting the reviews. Please try again")
                }finally{
                    setLoading(false)
                }
            }
        )()
    }, [itemId, type])

  return (
    <div>

    </div>
  )
}

export default ReviewsModal