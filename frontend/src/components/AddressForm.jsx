import {useState} from 'react'
import Input from './Input'
import MainBtn from './MainBtn'
import axiosInstance from '../utils/axiosInstance'
import { useAuth } from '@clerk/clerk-react'
import { useBasket } from '../context/BasketContext'
import {validateLine, validateCity, validatePostcode, validateCounty, isDataValid} from '../utils/helpers'


const AddressForm = ({setLoading, setAddress, existingAddress}) => {
    const [addressData, setAddressData] = useState({
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
    const [isDisabled, setDisabled] = useState(false)
    const { setErrorData} = useBasket()

    const handleInputChange = e => {
        const value = e.target.value
        const name = e.target.name

        setAddressData(prevState => ({...prevState, [name]: value }))
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        setDisabled(true)
        
        if(!isDataValid(addressData, errors, ["line2"])){
            alert('Please ensure there are no errors and all fields are filled before submitting')
            return
        }

        try{
            setLoading(true)
            setErrorData(null)

            const token = await getToken()
            let response

            if(existingAddress){
                response = await axiosInstance.put("/account/update-address", addressData, {
                    headers: { Authorization: `Bearer ${token}` }
                })
            }else{
                response = await axiosInstance.post("/account/add-address", addressData, {
                    headers: { Authorization: `Bearer ${token}` }
                })
            }
            

            if(response.data && response.data.address){
                alert('Address added successfully')
                setAddress(response.data.address)
            }
        }catch(error){
            setErrorData({
                header: "Error saving address",
                text: "An error occurred while saving the address. Please try again",
                canClose: true
            })
        }finally{
            setLoading(false)
            setDisabled(false)
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

        if(name === 'city'){
            const {isValid, errors} = validateCity(value)
            updateErrors(name, errors, isValid)
        }

        if(name === 'country'){
            return
        }
    }

  return (
    <div className='mb-10'>
        <form className='flex flex-col gap-3 min-w-[400px] mb-10'>
            <Input onChange={handleInputChange} onBlur={validateInput} errors={errors.line1} type="text" name="line1" label="line 1" placeholder="123 Main St" required/>
            <Input onChange={handleInputChange} onBlur={validateInput} errors={errors.line2} type="text" name="line2" label="line 2" placeholder="2nd floor (optional)" />
            <Input onChange={handleInputChange} onBlur={validateInput} errors={errors.city} type="text" name="city" label="city" placeholder="London" required/>
            <Input onChange={handleInputChange} onBlur={validateInput} errors={errors.postcode} type="text" name="postcode" label="postcode" placeholder="E10 5AN" required/>
            <Input onChange={handleInputChange} onBlur={validateInput} errors={errors.county} type="text" name="county" label="county" placeholder="Greater London" required/>
            <Input type="text" name="country" placeholder="United Kingdom" value="United Kingdom" disabled={true}/>
        </form>
        <MainBtn text="SAVE ADDRESS" method={handleSubmit} disabled={isDisabled}/>
    </div>
  )
}

export default AddressForm