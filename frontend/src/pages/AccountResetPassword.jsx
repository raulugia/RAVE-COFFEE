import { useEffect, useState } from 'react'
import Input from '../components/Input'
import MainBtn from '../components/MainBtn'
import { useSignIn } from '@clerk/clerk-react'
import { validateEmail } from '../utils/helpers'

const AccountResetPassword = () => {
    const [emailSent, setEmailSent] = useState(false)
    const [email, setEmail] = useState("")
    const [code, setCode] = useState("")
    const [loading, setLoading] = useState(false)
    const { signIn } = useSignIn()
    const [errors, setErrors] = useState([])

    const sendEmail = async(e) => {
        e.preventDefault()

        if(!validateEmail(email)) {
            alert('Please enter a valid email')
            return
        }

        setErrors([])

        try{
            setLoading(true)
            await signIn.create({strategy: 'reset_password_email_code', identifier: email})
            setEmailSent(true)
        }catch(error){
            if(error && error.errors){
                setErrors(prevErrors => [...prevErrors, error.errors[0].longMessage])
            }else{
                setErrors(prevErrors => [...prevErrors, 'An error occurred while sending reset code'])
            }
        }finally{
            setLoading(false)
        }
    }

  return (
    <div className='flex flex-col items-center'>
        <div>
            <h3 className="font-permanent-marker text-4xl mb-5 text-center">RESET PASSWORD</h3>
            <p className='font-fira'>Don't worry, we all do it sometimes.</p>
        </div>
        <div>
            {
                emailSent ? (
                    <div className='flex flex-col gap-10 items-center mt-10 font-fira max-w-[400px]'>
                        <p className='font-semibold text-center'>Please enter the code se sent to your email and the new password</p>
                        <form className='w-full flex flex-col gap-5'>
                            <Input type="text" placeholder="Code" onChange={e => setEmail(e.target.value)} errors={errors}/>
                            <MainBtn text="RESET PASSWORD" onClick={sendEmail}/>
                        </form>
                    </div>
                ) : (
                    <div className='flex flex-col gap-10 items-center mt-10 font-fira max-w-[400px]'>
                        <p className='font-semibold text-center'>Please enter your email and we'll send you a reset code</p>
                        <form className='w-full flex flex-col gap-5'>
                            <Input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} errors={errors}/>
                            <MainBtn text="SEND RESET CODE" onClick={sendEmail}/>
                        </form>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default AccountResetPassword