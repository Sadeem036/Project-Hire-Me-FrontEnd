import Cookies from 'js-cookie'
import React ,{useState} from 'react'
import axios from 'axios'

const Postcomplaint = () => {
  
const [input, setInput]=  useState([])

const userToken = Cookies.get("Token")  
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
   <div>

    <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}
    />
    <button onClick={onClickHandler}>Submit Complaint</button>

   </div>
  
  )  

}

export default Postcomplaint

