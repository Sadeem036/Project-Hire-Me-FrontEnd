import axios from 'axios'
import Cookies from 'js-cookie'
import React, {  useState } from 'react'
import CustomButton from '../custombutton/custombutton'
import style from '../complain/complain.module.css'

const GetComplaint = () => {
    const [complaint,setComplaint] = useState([])
    const userToken = Cookies.get('adminToken')

    const [val,setVal] = useState("")
    console.log(val)
    
    const onClickHandlerEmployee =(e)=>{
        const employee = "employee"

        axios.get(`http://localhost:5000/complaint/complaints?complaint=${employee}`,
        {
            headers:{
                'Content-Type':'Application/json',
                'Authorization':`Bearer ${userToken}`
            },
        }
        )  
        .then(res => {
            const {data} = res
            console.log("user data",data);
            setComplaint(data)
            console.log("ncomplaintss",complaint);
        })
        .catch( error => console.log(error))     
   
    }
    
    const onClickHandlerCustomer =(e)=>{
        const customer = "customer"

        axios.get(`http://localhost:5000/complaint/complaints?complaint=${customer}`,
        {
            headers:{
                'Content-Type':'Application/json',
                'Authorization':`Bearer ${userToken}`
            },
        }
        )  
        .then(res => {
            const {data} = res
            console.log("user data",data);
            setComplaint(data)
            console.log("ncomplaintss",complaint);
        })
        .catch( error => console.log(error))     
   
    }

  return (
    <div className={style.main}>
    <div className={style.btn}>
        <CustomButton onClick={onClickHandlerEmployee} name="Employee Complaints"/>
    <CustomButton onClick={onClickHandlerCustomer} name="Customer Complaints"/>

    </div>
    <div className={style.container}>

    {complaint.map((data)=>{
        return(
        <>
        <h4>Name:</h4>
        <p>{data.customer_id}   {data.customer_name}</p>
        <p>{data.emp_id}   {data.emp_name}</p>
        <h4>Description</h4><p>{data.complaint_description}</p>
        </>
        )
    })}
 
    </div>
    </div>
  )
}

export default GetComplaint






   {/* <input name="employee" label="employee" type="text" value={val} onChange={(e)=> setVal(e.target.value)}/>
    <FormButton name="get complaint" type="text" onClick={onClickHandler}/>
   {complaint.map((data)=>{
    return(
        <>
        <h4>Nname:</h4>
        <p>{data.customer_name}</p>
        <p>{data.emp_name}</p>
        <h4>Description</h4><p>{data.complaint_description}</p>
        
        </>
    )
   })} */}