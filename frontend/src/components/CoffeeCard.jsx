import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import MainBtn from './MainBtn'
import { useBasket } from '../context/BasketContext'
import CoffeeBean from './CoffeeBean'

const CoffeeCard = ({name, id, price, roast, taste, smallpictureUrl}) => {
    const { dispatch } = useBasket()
    const [loaded, setLoaded] = useState(false)

    const addToBasket = () => {
        dispatch({ type: "ADD", payload: { id, name, price, smallpictureUrl, quantity: 1, type: "coffee" }  });
    }

  return (
    <div className='mb-14 max-w-[400px] flex flex-col justify-between'>
        <Link to={`/coffee/${id}`}>
            <div className='w-[400px] h-[400px] mb-5'>
                <img src={smallpictureUrl} alt={name} className='w-full' onLoad={() => setLoaded(true)}/>
                {!loaded && <div className='w-full h-full bg-gray-200 flex items-center justify-center font-permanent-marker text-2xl'>Loading...</div>}
            </div>
            <div>   
                <h4 className='font-permanent-marker text-lg mb-6'>{name}</h4>
                <div className='font-fira flex flex-col gap-3 mb-14'>
                    <div className="flex items-center gap-1">
                        <p>Roast: </p>
                        <div className='flex gap-1'>
                            {
                                Array.from({ length: 5 }).map((_, index) => (
                                    <CoffeeBean key={index} color={index + 1 <= roast ? "brown" : "white"}/>
                                ))
                            }
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <p className='text-nowrap'>Tastes like: </p>
                        <p className='font-semibold'>{taste}</p>
                    </div>
                </div>
            </div>
        </Link>

        <div className='flex justify-between items-center font-fira'>
            <p>From £{price.toFixed(2)}</p>
            <MainBtn text="QUICK ADD +" method={addToBasket}/>
        </div> 
    </div>
  )
}

export default CoffeeCard