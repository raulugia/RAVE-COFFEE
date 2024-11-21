import { useState } from 'react'
import MainBtn from '../components/MainBtn'
import { Link, useNavigate } from 'react-router-dom'
import { validatePassword, validateEmail, validateName } from '../utils/helpers'
import PasswordFeedback from '../components/PasswordFeedback'
import Input from '../components/Input'
import axiosInstance from '../utils/axiosInstance'

const Register = () => {
    const [userData, setUserData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({
        first_name: [],
        last_name: [],
        email: [],
        password: []
    })
    const navigate = useNavigate()

    const isDataValid = () => {
        //Ensure all fields are filled
        const allFieldsFilled = Object.values(userData).every(value => value.trim().length > 0);
    
        //Ensure no errors
        const noErrors = Object.values(errors).every(errorArray => errorArray.length === 0);
    
        return allFieldsFilled && noErrors;
    };

    const [isDisabled, setIsDisabled] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        if(!isDataValid()){
            alert("Please ensure there are no errors and all the fields are filled before submitting")
            return
        }

        try{

            setIsDisabled(true)
            const response = await axiosInstance.post('/register', userData)

            if(response.status === 201){
                alert('Registration successful. Please check your email to verify your account before signing in.')
                navigate('/account/login')
            }
        }catch(error){
            const errorMessage = error.response?.data?.error || 'An error occurred while registering. Please try again.'
            alert(errorMessage)
        }finally{
            setIsDisabled(false)
        }
    }

    const handleInputChange = e => {
        const name = e.target.name
        const value = e.target.value

        setUserData(prevUserData => ({...prevUserData, [name]: value }))
    }

    const handlePassword = e => {
        const password = e.target.value

        setUserData(prevUserData => ({...prevUserData, password }))
        const { isValid, errors } = validatePassword(password)

        if(password.trim()) {
            if(!isValid) {
                setErrors(prevErrors => ({...prevErrors, password: errors }))
            }else{
                setErrors(prevErrors => ({...prevErrors, password: [] }))
            }
        }else{
            setErrors(prevErrors => ({...prevErrors, password: [] }))
        }
    }

    const handleEmail = e => {
        const email = e.target.value
        const isValid = validateEmail(email)

        if(!isValid){
            setErrors(prevErrors => ({...prevErrors, email: ['Invalid email address'] }))
        }else{
            setErrors(prevErrors => ({...prevErrors, email: [] }))
        }
    }

    const handleName_Surname = e => {
        const value = e.target.value
        const name = e.target.name

        const {errors, isValid} = validateName(value, name)

        if(isValid) {
            setErrors(prevErrors => ({...prevErrors, [name]: [] }))
        }else{
            setErrors(prevErrors => ({...prevErrors, [name]: errors }))
        }
    }

  return (
    <div className='py-20 flex justify-center bg-coffee-beans-pattern bg-no-repeat bg-contain'>
        <div className='flex flex-col items-center min-w-[400px]'>
            <div>
                <h1 className='font-permanent-marker text-5xl mb-10'>REGISTER</h1>
                <p className='font-fira text-lg text-gray-500'>Please enter your details</p>
            </div>

            <form className='w-full mt-10 font-fira'>
                <div className='flex flex-col gap-3 mb-5'>
                    <Input type="text" name="first_name" placeholder='First Name' errors={errors.first_name}
                        onChange={handleInputChange}
                        onBlur={handleName_Surname}
                    />
                    <Input type="text" name="last_name" placeholder='Last Name' errors={errors.last_name}
                        onChange={handleInputChange}
                        onBlur={handleName_Surname}
                    />
                    <Input type="email" name="email" placeholder='Email address' errors={errors.email}
                        onChange={handleInputChange}
                        onBlur={handleEmail}
                    />
                    <Input type="password" name="password" placeholder='Password'
                        onChange={handlePassword}
                    />
                </div>

                <PasswordFeedback errors={errors} isPassword={userData.password.length > 0}/>
                
                <div>
                    <MainBtn text="CREATE" method={handleSubmit} disabled={isDisabled} />
                    <div className="flex gap-2 justify-center mt-5">
                        <p>Have an account?</p>
                        <Link to="/account/login">Login</Link>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Register