import React, { useState, useEffect, useReducer } from 'react'
import FormButton from '../button/button'
import InputField from '../input-field/input-field'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import style from '../login-emp/login.module.css'
import Link from 'next/link'

const Login = () => {
    const [inputs, setInputs] = useState({}) ;
  const router = useRouter()
  const handleChangeLogin = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      method: "post",
      url: "http://localhost:5000/users/log-in",
      data: inputs
    })
    .then((res) => {
      const userData = res?.data?.user 
      if(userData == undefined || userData == null){
        console.log("User not found");
        alert("error")
        console.log('res.data',res)
        console.log("data null")
      }else {
        Cookies.set("empToken",res.data.accessToken)
        const [userData] = res.data.user 
        console.log('res.data',res.data)
        const {emp_id} = userData
        const {emp_city} = userData
        Cookies.set("emp_id",emp_id)
        Cookies.set("emp_city",emp_city)
        alert("Login Successfully")
        router.push("/employee")
      }
    })
    .catch((error) => console.log("data"));
  };

  return (
    <div className={style.container}>
      <div className={style.form}>
    <form onSubmit={handleSubmit}>
      <div className={style.formhead}>
      <h1 >Employee Login</h1>
      </div>
    <div className={style.input}>
    <InputField className={style.input} onChange={handleChangeLogin}
        label="Phone Number"
        name="emp_phone"
        type="text"
        value={inputs.emp_phone}
        />
        </div>
        <div className={style.input}>
    <InputField onChange={handleChangeLogin}
        label="Password"
        name="emp_password"
        type="password"
        value={inputs.emp_password}
        />
        </div>
        <div className={style.button3}>
    <FormButton  name="Login" type="submit" />
    </div>
    <div className={style.decoration}>
    <p>Don't have an Account ? <Link  href="/signup-emp">Signup</Link></p>
    </div>
    </form>
    </div>
    </div>
  )
}

export default Login
