import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import CustomButton from '../custombutton/custombutton'

const GetRequestForEmployee = () => {
  const userToken = Cookies.get("empToken")
  const empCity = Cookies.get("emp_city")
  console.log("employee cityy",empCity);

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
      console.log("response...",res.data);
      setRequests(res.data)
    }).catch(error => {
  
      console.log(error);
    })
  },[])

  const setValues = (data)=>{
    console.log("Data is",data.customer_id);
    const customer_id = data.customer_id
    const service_category_id = data.service_category_id
    const sub_category_id = data.sub_category_id
    const request_id =data.request_id
    axios({
      method:'post',
      headers:{
        "Content-Type":"Application/json",
        "Authorization":`Bearer ${userToken}`
      },
      url:"http://localhost:5000/service-detail/post-request",
      data:{
        "customer_id":customer_id,
        "service_category_id":service_category_id,
        "sub_category_id":sub_category_id,
        "service_status":"Active",
        "service_time": new Date(Date.now())
      }
    }).then(()=> alert("Request Accepted"))
    .catch(error => alert("Some error occurred. Please Refresh"))

    axios({
        method:"delete",
        headers:{
          "Content-Type":"Application/json",
          Authorization:`Bearer ${userToken}`
        },
        url:`http://localhost:5000/service-detail/delete-request/${request_id}`
    })
    .then(()=>console.log("Deleted"))
    .catch((error) => console.log( "error" ))
  }

  return (
    <>
    <div>
      {  
        requests.map((data)=>{
          if(data.customer_city == empCity){
            return(
              <div key={data.request_id}>
              {console.log("customer",data.customer_name)}
              
              <p>{data.customer_name}</p>
             
              <p>{data.service_category_name}</p>
              <p>{data.sub_category_name}</p>
              <CustomButton name="Accept" onClick={()=> setValues(data)}/>
              </div>
            )
          }
        })
      }
    </div>
    </>
  )
}

export default GetRequestForEmployee
