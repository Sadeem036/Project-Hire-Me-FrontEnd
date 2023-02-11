import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import FormButton from '../button/button'

const SubCategory = () => {
    const [subCategory,setSubCategory] = useState([])
    const userToken = Cookies.get('Token')
    const categoryId = Cookies.get("category_id")

    useEffect(()=>{
        axios.get('http://localhost:5000/service/sub-category',
        {
            headers:{
                'Content-Type':'Application/json',
                'Authorization':`Bearer ${userToken}`
            },
            data: categoryId
        }
        )  
        .then(res => {
            const {data} = res
            setSubCategory(data)
        })
        .catch( error => console.log(error))
    },[])

  return (
    <div>
    {subCategory.map(data=>{
        return(
            <>
            <li key={data.sub_category_id}>{data.sub_category_name}</li>
            <FormButton name="Show sub-category" type="submit"/>
            </>
        )
    })}
      
    </div>
  )
}

export default SubCategory