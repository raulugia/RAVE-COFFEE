import { useState } from 'react'
import Input from '../components/Input'
import MainBtn from '../components/MainBtn'
import { useUser } from '@clerk/clerk-react'
import { validatePassword } from '../utils/helpers'
import PasswordFeedback from '../components/PasswordFeedback'
import Loading from '../components/Loading'

const AccountChangePassword = () => {
    const [passwords, setPasswords] = useState({
        currentPassword: '',
        newPassword: '',
    })
    const [loading, setLoading] = useState(false)
    const { user } = useUser()
    const [errors, setErrors] = useState({
        password: []
    })

    const handlePasswordChange = (e) => {
        const password = e.target.value
        const name = e.target.name

        setPasswords(prevPasswords => ({...prevPasswords, [name]: password}))

        if(name === 'newPassword'){
            const {isValid, errors } = validatePassword(password)
    
            if(!isValid){
                setErrors({password: errors})
            }else{
                setErrors({password: []})
            }
        }
    }

    const isDataValid = (password, errors) => {
        const { isValid } = validatePassword(password)
        const validErrors = Object.values(errors).every(array => array.length === 0)
    
        return isValid && validErrors
    }

    //reset password once code has been sent
    const resetPassword = async(e) => {
        e.preventDefault()

        if(!isDataValid(passwords.newPassword, errors)){
            alert('Please ensure the new password is valid')
            return
        }

        try{
            setLoading(true)

            await user.updatePassword({ currentPassword: passwords.currentPassword, newPassword: passwords.newPassword})
            
            alert('Password changed successfully')
            setPasswords({currentPassword: '', newPassword: ''})
        }catch(error){
            if(error && error.errors){
                alert(error.errors[0].longMessage)
            }else{
                 alert('An error occurred while resetting password')
            }
        }finally{
            setLoading(false)
        }
    }

  return (
    <div className='flex flex-col items-center'>
        <div>
            <h3 className="font-permanent-marker text-4xl mb-5 text-center">CHANGE PASSWORD</h3>
            <p className='font-fira'>Please enter your new password below</p>
        </div>

        <div className='w-full flex flex-col gap-10 items-center mt-10 font-fira max-w-[400px]'>
            <form className='w-full flex flex-col gap-5'>
                <Input type="password" value={passwords.currentPassword} name="currentPassword" label="current password" placeholder="Current Password" onChange={handlePasswordChange} />
                <Input type="password" value={passwords.newPassword} name="newPassword" label="new password" placeholder="New Password" onChange={handlePasswordChange} />
                <PasswordFeedback password={passwords.newPassword} errors={errors} isPassword={passwords.newPassword.trim().length > 0}/>
                <MainBtn text="CHANGE PASSWORD" method={resetPassword}/>
            </form>
        </div>
        {
            loading && <Loading /> 
        }
    </div>
  )
}

export default AccountChangePassword