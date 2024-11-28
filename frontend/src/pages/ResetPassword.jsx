import { useEffect, useState } from 'react'
import Input from '../components/Input'
import MainBtn from '../components/MainBtn'
import { useSignIn } from '@clerk/clerk-react'
import { validateEmail, validatePassword } from '../utils/helpers'
import PasswordFeedback from '../components/PasswordFeedback'
import { useNavigate } from 'react-router-dom'
import Loading from '../components/Loading'

const AccountResetPassword = () => {
    const [emailSent, setEmailSent] = useState(false)
    const [userData, setUserData] = useState({
        email: '',
        newPassword: '',
        code: ''
    })
    const [loading, setLoading] = useState(false)
    const { signIn, setActive } = useSignIn()
    const [errors, setErrors] = useState({
        email: [],
        newPassword: [],
        code: [],
        clerk: [],
    })
    const navigate = useNavigate()

    //send a code to user's email so they can reset their password
    const sendEmail = async(e) => {
        e.preventDefault()

        if(!validateEmail(userData.email)) {
            alert('Please enter a valid email')
            return
        }

        setErrors(prevErrors => ({...prevErrors, email: []}))

        try{
            setLoading(true)
            await signIn.create({strategy: 'reset_password_email_code', identifier: userData.email})
            setEmailSent(true)
        }catch(error){
            console.log(error)
            if(error && error.errors){
                setErrors(prevErrors => ({...prevErrors, clerk: [error.errors[0].longMessage]}))
            }else{
                setErrors(prevErrors => ({...prevErrors, clerk: ['An error occurred while sending reset code']}))
            }
        }finally{
            setLoading(false)
        }
    }

    const handleEmail = e => {
        const email = e.target.value

        if(!validateEmail(email)) {
            setErrors(prevErrors => ({...prevErrors, email: ['Please enter a valid email']}))
        }else{
            setErrors(prevErrors => ({...prevErrors, email: []}))
        }
    }

    const handlePasswordChange = (e) => {
        const password = e.target.value
        setUserData(prevUserData => ({...prevUserData, newPassword: password}))

        const {isValid, errors } = validatePassword(password)

        if(!isValid){
            setErrors(prevErrors => ({...prevErrors, password: errors}))
        }else{
            setErrors(prevErrors => ({...prevErrors, password: []}))
        }
    }

    const isDataValid = (data, errors) => {
        const validData = Object.values(data).every(data => data.trim().length > 0)
        const validErrors = Object.values(errors).every(array => array.length === 0)

        return validData && validErrors
    }

    //reset password once code has been sent
    const resetPassword = async(e) => {
        e.preventDefault()
        setErrors(prevErrors => ({...prevErrors, clerk: []}))

        if(!isDataValid(userData, errors)){
            alert('Please ensure all the fields are valid')
            return
        }

        try{
            setLoading(true)

            const result = await signIn.attemptFirstFactor({
                strategy: 'reset_password_email_code', 
                code: userData.code, 
                password: userData.newPassword
            })

            if (result.status === 'complete') {
                setActive({ session: result.createdSessionId })
                navigate('/account')
            }
        }catch(error){
            if(error && error.errors){
                setErrors(prevErrors => ({...prevErrors, clerk: [error.errors[0].longMessage]}))
            }else{
                setErrors(prevErrors => ({...prevErrors, clerk: ['An error occurred while resetting password']}))
            }
        }finally{
            setLoading(false)
        }
    }

    const handleCode = e => {
        const code = e.target.value

        if(code.trim().length === 0){
            setErrors(prevErrors => ({...prevErrors, code: ["Code cannot be empty"]}))
        }else{
            setErrors(prevErrors => ({...prevErrors, code: []}))
        }
    } 

  return (
    <div className='flex flex-col items-center py-20 bg-coffee-beans-pattern bg-no-repeat bg-contain'>
        <div>
            <h3 className="font-permanent-marker text-4xl mb-5 text-center">RESET PASSWORD</h3>
            <p className='font-fira'>Don't worry, we all do it sometimes.</p>
        </div>
        <div>
            {
                emailSent ? (
                    <div className='flex flex-col gap-10 items-center my-10 font-fira max-w-[400px]'>
                        <p className='font-semibold text-center'>Please enter the code se sent to your email and the new password</p>
                        <form className='w-full flex flex-col gap-3'>
                            <Input type="text" placeholder="Code" onChange={e => setUserData(prevUserData => ({...prevUserData, code: e.target.value}))} onBlur={handleCode} errors={errors.code}/>
                            <Input type="password" placeholder="New Password" onChange={handlePasswordChange} />
                            <PasswordFeedback password={userData.newPassword} errors={errors} isPassword={userData.newPassword.trim().length > 0}/>
                            <MainBtn text="RESET PASSWORD" method={resetPassword}/>
                        </form>
                    </div>
                ) : (
                    <div className='flex flex-col gap-10 items-center mt-10 font-fira max-w-[400px]'>
                        <p className='font-semibold text-center'>Please enter your email and we'll send you a reset code</p>
                        <form className='w-full flex flex-col gap-5'>
                            <Input type="email" placeholder="Email" 
                                onChange={e => setUserData(prevUserData => ({...prevUserData, email: e.target.value}))} errors={errors.email}
                                onBlur={handleEmail}
                            />
                            <MainBtn text="SEND RESET CODE" method={sendEmail}/>
                        </form>
                    </div>
                )
            }
        </div>
        {
            loading && (
                <Loading />
            )
        }
    </div>
  )
}

export default AccountResetPassword