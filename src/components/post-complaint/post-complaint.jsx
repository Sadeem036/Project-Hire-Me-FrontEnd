import Cookies from 'js-cookie'
import React ,{useState} from 'react'
import axios from 'axios'
import CustomInput from '../custominput/custominput'
import style from "../post-complaint/post-complaint.module.css"
import CustomButton from '../custombutton/custombutton'

const Postcomplaint = () => {
  
const [input, setInput]=  useState([])

const userToken = Cookies.get("empToken")  
console.log(userToken);

const onClickHandler =()=>{
    console.log(input);
    console.log(typeof input);
    axios({
        method: "post",
        headers: {
             "Content-Type": "Application/json",
             Authorization:`Bearer ${userToken}`
             },
        url: "http://localhost:5000/complaint/complaints",
        data: {
            complaint_description:input
        }
    })
    .then(res => alert("Complaint registered"))
    .catch(error => alert("some error occurred"))
}
  
return (
   <div className={style.settings} >
    <div className={style.setting}>
    <CustomInput value={input} onChange={(e)=>setInput(e.target.value)}
    />
    <CustomButton onClick={onClickHandler} name="Submit Complaint"/>
    </div>
   </div>
  
  )  

}

export default Postcomplaint

