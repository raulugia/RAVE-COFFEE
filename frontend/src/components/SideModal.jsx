import { useEffect} from 'react'
import { useBasket } from '../context/BasketContext'

const SideModal = () => {
    const { setDisplayModal, displayModal } = useBasket()

    useEffect(() => {
        document.body.style.overflow = 'hidden'
    }, [])

    const closeModal = () => {
        document.body.style.overflow = 'auto'
        setDisplayModal(false)
    }

  // Render the modal based on the content type

  return (
    <div className='absolute w-full h-full bg-black/50 top-0 flex justify-end'>
        <div className='w-1/3 bg-white animate-slide-left'>
        {
            displayModal.contentType === "basket" ? (
                <p>Basket</p>
            ) : (
                <p>Description</p>
            )
        }
            
        </div>
    </div>
  )
}

export default SideModal