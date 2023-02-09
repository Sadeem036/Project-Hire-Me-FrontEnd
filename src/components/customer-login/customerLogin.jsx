import React, { useState } from 'react'
import InputField from '../input-field/input-field';
import FormButton from '../button/button';
import axios from 'axios';
import Cookies from 'js-cookie';
import Router, { useRouter } from 'next/router';
import style from '@/components/customer-login/login-customer.module.css'

const CustomerLogin = () => {
  const router = useRouter()
    const [inputs, setInputs] = useState({});
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
            Cookies.set("Token",res.data.accessToken)
            const [userData] = res.data.user 
            const {customer_id} = userData
            Cookies.set("User",customer_id) 
            router.push("/customer")
          }
          else{
            alert("Customer not found")
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
      <InputField onChange={handleChangeLogin}
          label="Phone Number"
          name="customer_phone"
          type="Number"
          value={inputs.customer_phone}
          />
  </div>
  <div className={style.input}>
  
      <InputField onChange={handleChangeLogin}
          label="Password"
          name="customer_password"
          type="password"
          value={inputs.customer_password}
          />
          </div>
        <div className={style.button3}>
      <FormButton name="Login" type="submit" />
      </div>
      </form>
      </div>
      </div>
    )
  

}

export default CustomerLogin
