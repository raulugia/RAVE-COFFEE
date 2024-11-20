import { useState} from 'react'
import MainBtn from '../components/MainBtn'
import { Link } from 'react-router-dom'
import { validatePassword } from '../utils/helpers'
import PasswordFeedback from '../components/PasswordFeedback'

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

  return (
    <div className='py-20 flex justify-center bg-coffee-beans-pattern bg-no-repeat bg-contain'>
        <div className='flex flex-col items-center min-w-[400px]'>
            <div>
                <h1 className='font-permanent-marker text-5xl mb-10'>REGISTER</h1>
                <p className='font-fira text-lg text-gray-500'>Please enter your details</p>
            </div>

            <form className='w-full mt-10 font-fira'>
                <div className='flex flex-col gap-3 mb-5'>
                    <input type="text" name="first_name" placeholder='First Name' className='border border-gray-200 px-3 py-3'/>
                    <input type="text" name="last_name" placeholder='Last Name' className='border border-gray-200 px-3 py-3'/>
                    <input type="email" name="last_name" placeholder='Email address' className='border border-gray-200 px-3 py-3'/>
                    <input onChange={handlePassword} type="password" name="last_name" placeholder='Password' className='border border-gray-200 px-3 py-3'/>
                </div>

                <PasswordFeedback errors={errors} isPassword={userData.password.length > 0}/>
                
                <div>
                    <MainBtn text="CREATE" method={() => console.log('Registration successful')}/>
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