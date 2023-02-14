import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'

const GetRequestForEmployee = () => {
  const userToken = Cookies.get("empToken")
  const empCity = Cookies.get("empCity")

  const [requests,setRequests] = useState([])

  useEffect(()=>{
    axios({
      method:'get',
      headers:{
        "Content-Type":"Application/json",
        "Authorization":`Bearer ${userToken}`
      },
      url:"http://localhost:5000/request/request",
    }).then((res)=>{
      console.log(res.data);
      setRequests(requests)
    }).catch(error => {
      alert("Some error occurred")
      console.log(error);
    })

  },[])
  const {customer_city} = requests
  console.log(customer_city);


  return (
    <div>
      
    </div>
  )
}

export default GetRequestForEmployee
