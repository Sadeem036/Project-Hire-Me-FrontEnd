import React, { useState } from "react";
import Cities from "../cities/cities";
import InputField from "../input-field/input-field";
import Language from "../language/language";
import FormButton from "../button/button";
import axios from "axios";


const SignupCustomer = () => {
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      method: "post",
      headers:{"Content-Type":"Application/json"},
      url: "http://localhost:5000/user/sign-up",
      data:  inputs
    })
      .then((res) => {
        console.log(res)
        alert("User Registered")
    })
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        onChange={handleChange}
        label="Phone Number"
        name="customer_phone"
        type="Number"
        value={inputs.customer_phone}
      />
      <InputField
        onChange={handleChange}
        label="Name"
        name="customer_name"
        type="text"
        value={inputs.customer_name}
      />
      <InputField
        onChange={handleChange}
        label="Password"
        name="customer_password"
        type="password"
        value={inputs.customer_password}
      />
      <Language
        onChange={handleChange}
        name="customer_language"
        value={inputs.customer_language}
      />
      <Cities onChange={handleChange} name="customer_city" value={inputs.customer_city} />
      <FormButton name="Signup" type="submit"/>
    </form>
  );
};

export default SignupCustomer;
