import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'

const CustomerReviews = () => {
    const [reviews,setReviews] = useState([])
    const userToken = Cookies.get("customerToken")

    useEffect(()=>{
      axios({
        method:"get",
        headers:{
          "Content-Type":"Application/json",
          "Authorization":`Bearer ${userToken}`
        },
        url:"http://localhost:5000/feedback/feed-back"
      }).then(res => {
        console.log(res.data);
        setReviews(res.data)
      })
    },[])


  return (
    <div>
    {
      reviews.map(data => {
        return(
          <div key={data.customer_feedback_id}>
            <p>Review: {data.customer_feedback_content}</p>
            <p>Employee: {data.emp_name}</p>
          </div>
        )
      })
    }
      
    </div>
  )
}

export default CustomerReviews
