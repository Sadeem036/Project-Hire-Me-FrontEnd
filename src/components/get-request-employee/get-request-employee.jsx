import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'

const GetRequestEmployee = () => {
    const [req,SetReq] = useState([])
    const userToken = Cookies.get("empToken")

    useEffect(()=>{
        axios({
            method:'get',
            headers:{
                "Content-Type":"Application/json",
                "Authorization":`Bearer ${userToken}`
            },
            url:"http://localhost:5000/request/request"
        }).then(res => {
            console.log(res.data);
            SetReq(res.data)
        })
        .catch(error => console.log(error))

    },[])

    
  return (
    <div>
      
    </div>
  )
}

export default GetRequestEmployee
