import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import CustomButton from '../custombutton/custombutton'

const ServiceByStatusForCustomer = () => {
    const [tasks,setTasks] = useState([])
    const userToken = Cookies.get("customerToken")
    useEffect(()=>{
        const status = "Active"
        axios({
            method:'get',
            headers:{
                "Content-Type":"Application/json",
                "Authorization":`Bearer ${userToken}`
            },
            url:`http://localhost:5000/service-detail/get-by-status/${status}`,
            
        }).then((res) =>{
            console.log(res.data);
            setTasks(res.data)
        }).catch(error => console.log(error))

    },[])


   const onClickHandle = (data)=>{
    const empCustomerServicesId = data.emp_customer_services_id
    axios({
        method:'put',
        headers:{
            "Content-Type":"Application/json",
            "Authorization":`Bearer ${userToken}`
        },
        url:`http://localhost:5000/service-detail/update-status/${empCustomerServicesId}`
    }).then(res => {
        console.log("Task COmpleted")
        console.log(res.data)
})
    .catch(error => console.log(error))

    const feedback = prompt("Please give your Feedback")
    const empId = data.emp_id
    console.log("dataa",data);
    axios({
        method:"post",
        headers:{
            "Content-Type":"Application/json",
            "Authorization":`Bearer ${userToken}`
        },
        url:"http://localhost:5000/feedback/feed-back",
        data:{
            "employee_feedback_content":feedback,
            "employee_feedback_stars":"3.5",
            "emp_id":empId
        }
    }).then(res => console.log(res))
    .catch(error => console.log(error))
   }

  return (
    <div>
    {
        tasks.map((data)=>{
         return(
            <>
                <p>Employee: {data.emp_name }</p>
                <p>Category: {data.service_category_name}</p>
                <p>Sub Category: {data.sub_category_name}</p>
                <CustomButton name="Complete" onClick={()=> onClickHandle(data) }/>
            </>
         )
        })
    }
      
    </div>
  )
}

export default ServiceByStatusForCustomer
