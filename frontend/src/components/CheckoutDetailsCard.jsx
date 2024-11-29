import { useState, useEffect } from 'react'
import { useAuth } from '@clerk/clerk-react'
import axiosInstance from '../utils/axiosInstance'
import Loading from '../components/Loading'
import {PaymentElement,  useStripe, useElements} from '@stripe/react-stripe-js';
import { useBasket } from '../context/BasketContext';
import { useNavigate } from 'react-router-dom';

const CheckoutDetailsCard = () => {
    const [userData, setUserData] = useState()
    const [loading, setLoading] = useState(false)
    const { getToken} = useAuth()
    const stripe = useStripe()
    const elements = useElements()
    const { basket, totalPrice} = useBasket()
    const navigate = useNavigate()
    console.log(basket)
    useEffect(() => {
        (
            async() => {
                try{
                    setLoading(true)

                    const token = await getToken()
                    const { data } = await axiosInstance.get("/account/details", {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })

                    setUserData(data)
                }catch(error){

                }finally{
                    setLoading(false)
                }
            }
        )()
    }, [])

    const handlePayment = async(e) => {
        e.preventDefault()
        setLoading(true)
        try{
            const { paymentIntent, error } = await stripe.confirmPayment({
                elements,
                confirmParams: {
                    return_url: `${window.location.origin}/payment-success`,
                },
                redirect: 'if_required',
            });

            if (error) {
                alert(error.message);
            }

            if(paymentIntent && paymentIntent.status === 'succeeded') {
                const token = await getToken();
                const response = await axiosInstance.post("/create-order",
                    {
                        paymentIntentId: paymentIntent.id,
                        total: totalPrice,
                        basket,
                        deliveryTotal: 7.99,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                console.log(response);
                alert("Order placed successfully.")
                navigate("/checkout/success")
            }
        }catch(error){
            console.log(error.message)
        }finally{
            setLoading(false)
        }
    }

  return (
    <div className='max-w-[55%]'>
        {
            userData && (
                <div className='font-fira mx-10 mb-10'>
                    <div>
                        <h4 className='font-semibold mb-1'>Account</h4>
                        <p>{userData.email}</p>
                    </div>
                    <div className='h-[1px] w-full bg-black my-5'></div>
                    <div>
                        <h4 className='font-semibold mb-1'>Ship to</h4>
                        <p className='text-wrap'>{userData.name} {userData.surname}, 
                            {userData.address.line1}, {userData.address.line2 ? `${userData.address.line2},` : ""} 
                            {userData.address.postcode}, {userData.address.county}, {userData.address.country}
                        </p>
                    </div>
                    <div className='h-[1px] w-full bg-black my-5'></div>
                    <div>
                        <h4 className='font-semibold mb-1'>Shipping Method</h4>
                        <p>1st Class Tracked (Next working day despatch) · £7.99</p>
                    </div>
                    <div className='mt-20 max-w-[75%]'>
                        <div className='mb-5'>
                            <h2 className='font-semibold text-2xl'>Payment</h2>
                        </div>
                        <div className='bg-slate-200 px-10 pt-5 pb-8 rounded-md'>
                            <PaymentElement />
                            <button type="submit" onClick={handlePayment} className='w-full bg-black text-xl font-semibold text-white py-3 rounded-md font-fira mt-8'>
                                Complete Order
                            </button>
                        </div>
                    </div>
                </div>
            )
        }
        {
            loading && <Loading />
        }
    </div>
  )
}

export default CheckoutDetailsCard