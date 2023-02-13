import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import Router, { useRouter } from 'next/router'

const GetEmpService = () => {
    const router = useRouter()
    const [empService,SetEmpService] = useState([])
    const userToken = Cookies.get("empToken")

    useEffect(()=>{
    axios({
        method:'get',
        headers:{
            "Content-Type":"Application/json",
            "Authorization":`Bearer ${userToken}`
        },
        url:"http://localhost:5000/emp-service/emp-service"
    }).then(res => {
        console.log(res.data)
        SetEmpService(res.data)
    })
    .catch(error => console.log(error))

     },[])
      
     const [subId,setSubId] = useState("")

     console.log(subId);

     const deleteService = ()=>{
        axios({
            method:'delete',
            headers:{
                "Content-Type":"Application/json",
                "Authorization":`Bearer ${userToken}`
            },
            url:"http://localhost:5000/emp-service/emp-service",
            data:{
                "sub_category_id":subId
            }
        }).then(()=> {
            alert("Service Deleted")
            
        })
        .catch(error => console.log("Error Occurred"))
     }
    
  return (
    <div>
    <h1>Select which you want to delete:</h1>
    {
        empService.map(data => {
            return(
                <div>
                <p>Category: {data.service_category_name} </p>
                
                <label>
                <input type="checkbox" value={data.sub_category_id} onClick={ e => setSubId(e.target.value)}/>
                {data.sub_category_name}
                </label>
                <button onClick={deleteService}>Delete sub Category</button>
                </div>
                
            )
        })
    }
      
    </div>
  )
}

export default GetEmpService
