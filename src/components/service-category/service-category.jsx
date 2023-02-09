import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import FormButton from '../button/button'

const ServiceCategory = () => {
    const [category,setCategory] = useState([])
    const userToken = Cookies.get('Token')

    useEffect(()=>{
        axios.get('http://localhost:5000/service/service-category',
        {
            headers:{
                'Content-Type':'Application/json',
                'Authorization':`Bearer ${userToken}`
            },
        }
        )  
        .then(res => {
            const {data} = res
            setCategory(data)
        })
        .catch( error => console.log(error))
    },[])

  return (
    <div>
    <select>
    
    {category.map(data=>{
        return(
            <>
            
            <option><p>{data.service_category_id} </p><p>{data.service_category_name}</p></option>
            
            </>
        )
    })}
    </select>
      
    </div>
  )
}

export default ServiceCategory





// {category.map(data=>{
//     return(
//         <>
//         <li key={data.service_category_id}>{data.service_category_name}</li>
//         <FormButton name="Show sub-category" type="submit" 
//         onClick={()=> {
//             Cookies.set("category_id",data.service_category_id)
//             }}/>
//         </>
//     )
// })}