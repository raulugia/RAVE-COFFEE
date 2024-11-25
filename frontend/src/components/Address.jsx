import { useState } from 'react'
import MainBtn from './MainBtn'
import AddressForm from './AddressForm'

const Address = ({address, setAddress, setLoading}) => {
    const [showForm, setShowForm] = useState(false)
    
  return (
    <div>
        {
            address ? (
                <div>
                    there is one
                </div>
            ) : (
                showForm ? (
                    <AddressForm setShowForm={setShowForm} setLoading={setLoading} setAddress={setAddress}/>
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