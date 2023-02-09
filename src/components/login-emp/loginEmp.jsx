import React, { useState } from 'react'
import FormButton from '../button/button'
import InputField from '../input-field/input-field'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import style from '@/components/login-emp/login.module.css'

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
    console.log(inputs);
    axios({
      method: "post",
      url: "http://localhost:5000/users/log-in",
      data: inputs
    })
      .then((res) => {
        if(res.length > 0){
          console.log(res)
        Cookies.set("Token",res.data.accessToken)
        const [userData] = res.data.user 
        const {emp_id} = userData
        Cookies.set("User",emp_id)
        router.push("/employee")
        }
        else{
          alert("User not found")
        } 
      })
      .catch((error) => console.log(error));
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
        type="Number"
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
    </form>
    </div>
    </div>
  )
}

export default Login
