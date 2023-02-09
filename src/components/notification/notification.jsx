import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'

const GetNotification = () => {
    const [notification,setNotification] = useState(["hello"])
    const userToken = Cookies.get('Token')

    useEffect(()=>{
        axios.get('http://localhost:5000/notification/notification',
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
            setNotification(data)
            //console.log(res.data);
            console.log("notificationsss",notification);
        })
        .catch( error => console.log(error))     
    },[])

  return (
    <div>
   {notification.map((data)=>{
    return(
        <li key={data.notification_id}>{data.notification_content}</li>
    )
   })}
    </div>
  )
}

export default GetNotification
