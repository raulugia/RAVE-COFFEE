import { useState } from 'react'
import MainBtn from './MainBtn'

const Address = ({address}) => {
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
                    <div>
                    <p className='text-slate-400 mb-10'>You have not added an address yet</p>
                    <MainBtn text="ADD ADDRESS" method={() => setShowForm(!showForm)}/>
                </div>
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