import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import CustomerLogin from '../components/customer-login/customerLogin'

const CustomerLoginPage = () => {
  const router = useRouter()
  const isAuthenticated = Cookies.get('customerToken')
  useEffect(()=>{
    if(isAuthenticated){
      router.push('/customer')
  console.log('isValid')
}
  },[])

  // else {
  //   router.push('/emp-login')
  // }
  console.log('emplogin',isAuthenticated)
  return (
    <div>
    <CustomerLogin/>
    </div>
  )
}

export default CustomerLoginPage
