import {useState} from 'react'
import Input from './Input'

//type, name, onChange, onBlur, placeholder, errors=[], ...props

const AddressForm = () => {
    const [address, setAddress] = useState(null)

  return (
    <form>
        <Input type="text" name="line1" placeholder="123 Main St" />
        <Input type="text" name="line2" placeholder="2nd floor (optional)" />
        <Input type="text" name="city" placeholder="London" />
        <Input type="text" name="postcode" placeholder="E10 5AN" />
        <Input type="text" name="county" placeholder="Greater London" />
        <Input type="text" name="country" placeholder="United Kingdom" value="United Kingdom" disabled={true}/>
    </form>
  )
}

export default AddressForm