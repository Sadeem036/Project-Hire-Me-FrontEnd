import React, { useState } from 'react'
import InputField from '../input-field/input-field';
import FormButton from '../button/button';
import axios from 'axios';
import Cookies from 'js-cookie';
import style from "../../components/login-admin/login-admin.module.css"

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
        Cookies.set("adminToken", res.data.accessToken)
        const [userData] = res.data.user
        const { admin_id } = userData
        Cookies.set("User", admin_id)
      })
      .catch((error) => console.log(error));
  };

  return (

    <div className={style.container}>
      <div className={style.form}>
        <form onSubmit={handleSubmit}>
          <div className={style.formhead}>
            <h1 >Admin Login</h1>
          </div>
          <div className={style.input}>
            <InputField onChange={handleChangeLogin}
              label="Phone Number"
              name="admin_phone"
              type="Number"
              value={inputs.admin_phone}
            />
          </div>
          <div className={style.input}>
            <InputField onChange={handleChangeLogin}
              label="Password"
              name="admin_password"
              type="password"
              value={inputs.admin_password}
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

export default LoginAdmin
