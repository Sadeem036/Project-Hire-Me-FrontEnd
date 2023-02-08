import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import FormButton from '../button/button'

const GetComplaint = () => {
    const [complaint,setComplaint] = useState([])
    const userToken = Cookies.get('Token')

    useEffect(()=>{
        axios.get('http://localhost:5000/complaint/complaints',
        {
            headers:{
                'Content-Type':'Application/json',
                'Authorization':`Bearer ${userToken}`
            },
            data:Cookies.get("value")
        }
        )  
        .then(res => {
            const {data} = res
            console.log("user data",data);
            setComplaint(data)
            console.log("ncomplaintss",complaint);
        })
        .catch( error => console.log(error))     
    },[])

  return (
    <div>
   {complaint.map((data)=>{
    return(
        <>
        <li key={data.complaint_id}>{data.complaint_description}</li>
        <FormButton name="Employee Complaints" type="text" onClick={()=>{Cookies.set("value","customer")}}/>
        <FormButton name="Customer Complaints" type="text" onClick={()=>{Cookies.set("value","employee")}}/>
        </>
    )
   })}
    </div>
  )
}

export default GetComplaint

