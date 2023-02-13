import React from 'react'
import style from '../Stauts/status.module.css'
import Router, { useRouter } from 'next/router'

export default function UserStatus() {
    const router = useRouter()
    return (
        <div className={style.container}>
            <div className={style.status} >

                <button className={style.button1}  >Active</button>

                <button className={style.button2}>Pending</button>

                <button className={style.button3}>Completed</button>
            </div>
            <div className={style.services}>
                <button onClick={()=> router.push("/service-category")} className={style.service}>
                + Add Skills</button>
            </div>
            <div>
                <button onClick={()=> router.push("/show-emp-service")} >Your Skills</button>
            </div>
        </div>
    )
}
