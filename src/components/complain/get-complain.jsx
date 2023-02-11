import axios from 'axios'
import Cookies from 'js-cookie'
import React, {  useState } from 'react'
import FormButton from '../button/button'

const GetComplaint = () => {
    const [complaint,setComplaint] = useState([])
    const userToken = Cookies.get('adminToken')

    const [val,setVal] = useState("")
    console.log(val)
    
    const onClickHandler =(e)=>{
        console.log(val);
        console.log("hello");

        axios.get(`http://localhost:5000/complaint/complaints?complaint=${val}`,
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
    <div>
    <input name="employee" label="employee" type="text" value={val} onChange={(e)=> setVal(e.target.value)}/>
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
   })}
    </div>
  )
}

export default GetComplaint

