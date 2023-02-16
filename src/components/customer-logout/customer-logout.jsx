import React from 'react'
import Cookies from 'js-cookie'
import Router, { useRouter } from 'next/router'
import CustomButton from '../custombutton/custombutton'

const CustomerLogout = () => {
    const router = useRouter()
    const onClickHandle = ()=>{
        Cookies.remove("customerToken")
        Cookies.remove("customer_id")
        Cookies.remove("customer_city")
        router.push("/")
    }
  return (
    <div>
    <CustomButton onClick={onClickHandle} name="Logout"/>
      
    </div>
  )
}

export default CustomerLogout
