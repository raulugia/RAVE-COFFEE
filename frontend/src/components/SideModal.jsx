import { useEffect} from 'react'
import { useBasket } from '../context/BasketContext'
import BasketModal from './BasketModal'

const SideModal = () => {
    const { setDisplayModal, displayModal } = useBasket()

    useEffect(() => {
        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [])

  return (
    <div className='fixed w-full h-full bg-black/50 top-0 flex justify-end z-[201]'>
        <div className='md:w-1/3 w-full bg-white animate-slide-left'>
        {
            displayModal&& (
                <BasketModal />
            )
        }
        </div>
    </div>
  )
}

export default SideModal