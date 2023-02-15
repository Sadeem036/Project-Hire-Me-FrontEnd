import React from 'react'
import style from '../customer-status/customer.module.css'
import Router, { useRouter } from 'next/router'
export default function CustomerStatus() {
    const router = useRouter()
    return (
        <div className={style.container}>
            <div className={style.status} >

                <button className={style.button1} onClick={()=> router.push("/customer-service-status")} >Active</button>

                <button className={style.button2}>Pending</button>

                <button className={style.button3} onClick={()=> router.push("/customer-completed-service")} >Completed</button>
            </div>
            <div className={style.services}>
                <button className={style.service} onClick={()=> router.push("/customer-request-page")}>Select Services</button>
            </div>
        </div>
    )
}
