import Login from '@/components/login-emp/loginEmp'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import React from 'react'
import Employee from './employee'

const LoginPage = () => {
  const router = useRouter()
  const isAuthenticated = Cookies.get('Token')
  // else {
  //   router.push('/emp-login')
  // }
  console.log('emplogin',isAuthenticated)
  return (
    <div>
      {isAuthenticated === undefined ? <Login />:<Employee />}
      
    </div>
  )
}

export default LoginPage
