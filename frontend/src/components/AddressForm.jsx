import {useState} from 'react'
import Input from './Input'
import MainBtn from './MainBtn'
import axiosInstance from '../utils/axiosInstance'
import { useAuth } from '@clerk/clerk-react'
import {validateLine, validateCity, validatePostcode, validateCounty} from '../utils/helpers'

//type, name, onChange, onBlur, placeholder, errors=[], ...props

const AddressForm = () => {
    const [address, setAddress] = useState({
        line1: '',
        line2: '',
        city: '',
        postcode: '',
        county: '',
        country: 'United Kingdom'
    })
    const [errors, setErrors] = useState({
        line1: [],
        line2: [],
        city: [],
        postcode: [],
        county: [],
    })
    const { getToken } = useAuth()
    const [loading, setLoading] = useState(false)

    const handleInputChange = e => {
        const value = e.target.value
        const name = e.target.name

        setAddress(prevState => ({...prevState, [name]: value }))
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        setLoading(true)

        try{
            const token = await getToken()
            const response = await axiosInstance.post("/account/add-address", address, {
                headers: { Authorization: `Bearer ${token}` }
            })
        }catch(error){
            alert('An error occurred while saving the address. Please try again.')
        }finally{
            setLoading(false)
        }
    }

    const updateErrors = (name, errors, isValid) => {
        if(!isValid){
            setErrors(prevErrors => ({...prevErrors, [name]: errors }))
        }else{
            setErrors(prevErrors => ({...prevErrors, [name]: [] }))
        }
    }

    const validateInput = e => {
        const name = e.target.name
        const value = e.target.value

        if(name === 'line1' || name === 'line2'){
            const {isValid, errors} = validateLine(value, name)
            updateErrors(name, errors, isValid)
        }

        if(name === 'postcode'){
            const {isValid, errors} = validatePostcode(value)
            updateErrors(name, errors, isValid)
        }

        if(name === 'county'){
            const {isValid, errors} = validateCounty(value)
            updateErrors(name, errors, isValid)
        }

        if(name === 'country'){
            return
        }
    }

  return (
    <div>
        <form className='flex flex-col gap-3 min-w-[400px] mb-10'>
            <Input onChange={handleInputChange} onBlur={validateInput} errors={errors.line1} type="text" name="line1" placeholder="123 Main St" required/>
            <Input onChange={handleInputChange} onBlur={validateInput} errors={errors.line2} type="text" name="line2" placeholder="2nd floor (optional)" />
            <Input onChange={handleInputChange} onBlur={validateInput} errors={errors.city} type="text" name="city" placeholder="London" required/>
            <Input onChange={handleInputChange} onBlur={validateInput} errors={errors.postcode} type="text" name="postcode" placeholder="E10 5AN" required/>
            <Input onChange={handleInputChange} onBlur={validateInput} errors={errors.county} type="text" name="county" placeholder="Greater London" required/>
            <Input type="text" name="country" placeholder="United Kingdom" value="United Kingdom" disabled={true}/>
        </form>
        <MainBtn text="SAVE ADDRESS" method={handleSubmit}/>
    </div>
  )
}

export default AddressForm