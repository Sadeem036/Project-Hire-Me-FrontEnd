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
        Cookies.remove("customerToken")
        Cookies.remove("customer_id")
        Cookies.remove("customer_city")
        router.push("/")
    }


  return (
    <div>
      <FormButton name="Logout" onClick={logoutHandler}/>
    </div>
  )
}

export default LogoutButton
