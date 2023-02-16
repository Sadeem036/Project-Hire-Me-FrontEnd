import React from 'react'
import style from '../customer-status/customer.module.css'
import Router, { useRouter } from 'next/router'
export default function CustomerStatus() {
    const router = useRouter()
    return (
        <div className={style.container}>
            <div className={style.status} >

                <button onClick={()=> router.push("/")} type ="submit" className={style.button1}  >Active</button>

                <button className={style.button2}>Pending</button>

                <button onClick={()=> router.push("/complete-service")} type ="submit" className={style.button3}>Completed</button>
            </div>
            <div className={style.services}>
                <button onClick={()=> router.push("/service-category")} type ="submit" className={style.service}>Select Services</button>

            </div>
        </div>
    )
}
