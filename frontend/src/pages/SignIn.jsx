import { useState } from 'react'
import MainBtn from '../components/MainBtn'
import { Link, useNavigate } from 'react-router-dom'
import { validatePassword, validateEmail, validateName } from '../utils/helpers'
import PasswordFeedback from '../components/PasswordFeedback'
import Input from '../components/Input'
import Loading from '../components/Loading'
import { useSignIn } from "@clerk/clerk-react";


const SignIn = () => {
  const [loading, setLoading] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const [error, setError] = useState("")
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  })
  const navigate = useNavigate()
  const { signIn, setActive } = useSignIn()

  const handleSubmit = async(e) => {
    e.preventDefault()
    setLoading(true)

    try{
      if(!userData.email ||!userData.password){
        alert('Please fill in all fields')
        return
      }

      const completeSignIn = await signIn.create({
        identifier: userData.email,
        password: userData.password,
      })

      //If sign-in process is complete, set the created session as active
      //and redirect the user
      if (completeSignIn.status === 'complete') {
        await setActive({ session: completeSignIn.createdSessionId })
        navigate('/account')
      }
      
    }catch(error){
      if (error.errors && error.errors.length > 0) {
        const errorMessage = error.errors[0].longMessage || error.errors[0].message;
        setError(errorMessage.replace(".", ""))

        if(errorMessage === "You're already signed in"){
          navigate('/account')
        }
      } else {
          setError('An error occurred while signing in')
      }
    }finally{
      setLoading(false)
    }
  }

  const handleInputChange = e => {
    const value = e.target.value
    const name = e.target.name

    setUserData({...userData, [name]: value })
  }

  return (
    <div className='py-20 flex justify-center bg-coffee-beans-pattern bg-no-repeat bg-contain'>
        <div className='flex flex-col items-center min-w-[400px]'>
            <div className='text-center'>
                <h1 className='font-permanent-marker text-5xl mb-10'>LOGIN</h1>
                <p className='font-fira text-lg text-gray-500'>Please enter your details</p>
            </div>

            <form className='w-full mt-10 font-fira'>
                <div className='flex flex-col gap-3 mb-5'>
                    <Input type="email" name="email" placeholder='Email address' 
                        onChange={handleInputChange} required
                    />
                    <Input type="password" name="password" placeholder='Password'
                        onChange={handleInputChange} required
                    />
                    <Link className='text-sm text-right hover:underline' to="/reset-password">Forgot your password?</Link>
                </div>
                <div className='h-[25px]'>
                  {
                    error && (
                        <p className='text-red-600 text-sm'>{error}</p>
                      )
                  }
                </div>
                
                <div className='mt-16'>
                    <MainBtn text="SIGN IN" method={handleSubmit} disabled={isDisabled} />
                    <div className="flex gap-2 justify-center mt-5">
                        <p>Don't have an account?</p>
                        <Link to="/account/register" className='underline'>Sign Up</Link>
                    </div>
                </div>
            </form>
        </div>
        {
            loading && <Loading />
        }
    </div>
  )
}

export default SignIn