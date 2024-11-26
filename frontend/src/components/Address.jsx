import { useState } from 'react'
import MainBtn from './MainBtn'
import AddressForm from './AddressForm'

const Address = ({address, setAddress, setLoading}) => {
    const [showForm, setShowForm] = useState(false)
    
  return (
    <div>
        {
            address && !showForm ? (
                <div>
                    <div className='mb-10'>
                        <p>{address.line1}</p>
                        <p>{address.line2}</p>
                        <p>{address.city}</p>
                        <p>{address.postcode}</p>
                        <p>{address.county}</p>
                        <p>{address.country}</p>
                    </div>
                    <MainBtn text="ADD NEW ADDRESS" method={() => setShowForm(!showForm)}/>
                </div>
            ) : (
                showForm ? (
                    <AddressForm setShowForm={setShowForm} setLoading={setLoading} setAddress={setAddress} existingAddress={address}/>
                ) : (
                    <div>
                        <p className='text-slate-400 mb-10'>You have not added an address yet</p>
                        <MainBtn text="ADD ADDRESS" method={() => setShowForm(!showForm)}/>
                    </div>
                )
            )
        }
    </div>
  )
}

export default Address