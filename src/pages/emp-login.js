import Login from '../components/login-emp/loginEmp'

import React from 'react'


const LoginPage = () => {
  // const router = useRouter()
  // const isAuthenticated = Cookies.get('Token')
  // // else {
  // //   router.push('/emp-login')
  // // }
  // console.log('emplogin',isAuthenticated)
  // return (
  //   <div>
  //     {isAuthenticated === undefined ? <Login />:<Employee />}
      
  //   </div>
  // )
  return(
    <>
      <Login/>
    </>
  )
}

export default LoginPage
