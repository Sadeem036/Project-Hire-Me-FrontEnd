import React, { useState } from 'react'
import Input from '../input/input'
import style  from '@/components/signup/signup.module.css'
import FormButton from '../button/button'
const SignUpForm = () => {

  const [phoneNumber, setPhoneNumber] = useState("")
  const [error, setError] = useState(null)

  const changeHandler =(event)=>{
    setPhoneNumber(event.target.value)
}

  const handleSubmit = (event) => {
    event.preventDefault()
    const phoneRegex = /^03\d{9}$/;
        console.log(phoneNumber)
    if (phoneRegex.test(phoneNumber)) {
      setError("Number Verified")
    } else {
      setError('Invalid phone number')
    }
  }

  return (
    <form onSubmit={handleSubmit} className={style.container}>

     <div className= {style.signupform}>

     <Input value={phoneNumber} handle={changeHandler}/>
      {error && <p>{error}</p>}
      <FormButton name = "SEND CODE" type="Submit"/>
     </div>

    </form>
  )
}

export default SignUpForm


