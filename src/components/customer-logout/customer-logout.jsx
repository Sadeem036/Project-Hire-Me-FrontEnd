import React from 'react'
import Cookies from 'js-cookie'
import Router, { useRouter } from 'next/router'

const CustomerLogout = () => {
    const router = useRouter()
    const onClickHandle = ()=>{
        Cookies.remove("customerToken")
        Cookies.remove("customerId")
        Cookies.remove("customerCity")
        router.push("/")
    }
  return (
    <div>
      
    </div>
  )
}

export default CustomerLogout
