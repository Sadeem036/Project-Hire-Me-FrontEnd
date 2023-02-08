import React, { useState } from 'react'
import InputField from '../input-field/input-field';
import FormButton from '../button/button';
import axios from 'axios';
import Cookies from 'js-cookie';

const LoginAdmin = () => {
  const [inputs, setInputs] = useState({});
  //const router = useRouter();
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
      url: "http://localhost:5000/admin/log-in",
      data: inputs
    })
      .then((res) => {
        console.log(res)
        Cookies.set("Token",res.data.accessToken)
        const [userData] = res.data.user 
        const {admin_id} = userData
        Cookies.set("User",admin_id)
      })
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit}>
    <InputField onChange={handleChangeLogin}
        label="Phone Number"
        name="admin_phone"
        type="Number"
        value={inputs.admin_phone}
        />

    <InputField onChange={handleChangeLogin}
        label="Password"
        name="admin_password"
        type="password"
        value={inputs.admin_password}
        />
    <FormButton name="Login" type="submit" />
    </form>
  )
}

export default LoginAdmin
