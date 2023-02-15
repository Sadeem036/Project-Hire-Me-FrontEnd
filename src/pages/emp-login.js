import Login from '../components/login-emp/loginEmp'

import React from 'react'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'


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
  return(
    <>
      <Login/>
    </>
  )
}

export default LoginPage
