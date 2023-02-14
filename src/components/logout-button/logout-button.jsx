import Cookies from 'js-cookie'
import React from 'react'
import FormButton from '../button/button'
import Router, { useRouter } from 'next/router'

const LogoutButton = () => {
    const router = useRouter()

    const logoutHandler = ()=>{
        Cookies.remove("empToken")
        Cookies.remove("emp_id")
        Cookies.remove("emp_city")
        router.push("/")
    }


  return (
    <div>
      <FormButton name="Logout" onClick={logoutHandler}/>
    </div>
  )
}

export default LogoutButton
