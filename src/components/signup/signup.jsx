import React from 'react'
import Cities from '../cities/cities'
import InputField from '../input-field/input-field'
import Language from '../language/language'
import FormButton from '../button/button'


const Signup = () => {

  return (
    <form>
    <InputField name="PhoneNumber" type="Number" value={phoneNumber}/>  
    <InputField name="Name" type="text" value={Name}/> 
    <InputField name="Password" type="password" value={Password}/> 
    <Cities value={city}/>
    <Language value={language}/>
    <FormButton name="Signup" type="submit" />
    </form>
  )
}

export default Signup
