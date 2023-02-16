import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import style from '../emp-reviews/reviews.module.css'

const EmpReviews = () => {
    const [reviews,setReviews] = useState([])
    const userToken = Cookies.get("empToken")

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
          <div key={data.employee_feedback_id} className={style.container}>
            <p>Review: {data.employee_feedback_content}</p>
            <p>Customer: {data.customer_name}</p>
          </div>
        )
      })
    }
      
    </div>
  )
}

export default EmpReviews
