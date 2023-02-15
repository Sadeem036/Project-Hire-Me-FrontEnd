import React, { useState } from "react";
import Cities from "../cities/cities";
import InputField from "../input-field/input-field";
import Language from "../language/language";
import FormButton from "../button/button";
import axios from "axios";
import Router, { useRouter } from "next/router";
import style from '../signup-customer/signup.module.css'
import Link from "next/link";

const SignupCustomer = () => {
  const router = useRouter()
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const {customer_phone} = inputs
    const {customer_password} = inputs
    console.log(customer_password);
    const phoneRegex = /^(\+92|0092|92)(-)?[0-9]{3}(-)?[0-9]{7}$/
    if(phoneRegex.test(customer_phone) ){
    axios({
      method: "post",
      headers: { "Content-Type": "Application/json" },
      url: "http://localhost:5000/user/sign-up",
      data: inputs
    })
      .then((res) => {
        console.log(res)
        alert("Customer Registered")
    })
      .catch((error) => console.log(error));
  }
  else{
    alert("Invalid Phone Number(example: 92xxxxxxxxxx) or Password(must be 6 characters) ")
  }
}

  return (
    <div className={style.container}>
      <div className={style.form}>
        <form onSubmit={handleSubmit}>
          <h1>Signup Customer</h1>
          <div className={style.input}>
            <InputField
              onChange={handleChange}
              label="Phone Number"
              name="customer_phone"
              type="text"
              value={inputs.customer_phone}
            />
          </div>
          <div className={style.input}>

            <InputField
              onChange={handleChange}
              label="Name"
              name="customer_name"
              type="text"
              value={inputs.customer_name}
            />
          </div>
          <div className={style.input}>
            <InputField
              onChange={handleChange}
              label="Password"
              name="customer_password"
              type="password"
              value={inputs.customer_password}
            />
          </div>
          <div className={style.button1}>
            <Language
              onChange={handleChange}
              name="customer_language"
              value={inputs.customer_language}
            />
          </div>
          <div className={style.button2}>
            <Cities onChange={handleChange} name="customer_city" value={inputs.customer_city} />
          </div>
          <div className={style.button3}>
            <FormButton name="Signup" type="submit"  />
          </div>
          <p>already have an account?<Link className={style.decoration} href="/customer-login">Login</Link></p>
        </form>
      </div>
    </div>
  );
};

export default SignupCustomer;
